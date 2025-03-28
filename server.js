import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Route Handler
app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello World"); 
});

// Start Server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
