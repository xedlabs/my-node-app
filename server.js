const express = require("express");
const app = express();

// Default port from environment or fallback
const PORT = process.env.PORT || 3000;

// Simple homepage
app.get("/", (req, res) => {
  res.send("<h1>Hello from Node.js 🚀</h1>");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});
