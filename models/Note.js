const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

NoteSchema.index({ title: "SomeTItle", content: "Mark Twaine" }); 

module.exports = mongoose.model("Note", NoteSchema);
