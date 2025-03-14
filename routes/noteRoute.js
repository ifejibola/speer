const express = require("express");
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Note
router.post("/", authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content, owner: req.user.userId });
    await note.save();
    res.status(201).json(note);
});

// Get All Notes
router.get("/", authMiddleware, async (req, res) => {
    const notes = await Note.find({ owner: req.user.userId });
    res.json(notes);
});

// Get Single Note
router.get("/:id", authMiddleware, async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
});

// Update Note
router.put("/:id", authMiddleware, async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
});

// Delete Note
router.delete("/:id", authMiddleware, async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
});

// Share Note
router.post("/:id/share", authMiddleware, async (req, res) => {
    const note = await Note.findById(req.params.id);
    note.sharedWith.push(req.body.userId);
    await note.save();
    res.json({ message: "Note shared" });
});

// Search Notes
router.get("/search", authMiddleware, async (req, res) => {
    const notes = await Note.find({ 
        owner: req.user.userId, 
        $text: { $search: req.query.q }
    });
    res.json(notes);
});

module.exports = router;
