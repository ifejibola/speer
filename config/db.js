const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoose.connect("mongodb+srv://ifejibola:9FHuXwXcItbLOxle@cluster0.ahjp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
