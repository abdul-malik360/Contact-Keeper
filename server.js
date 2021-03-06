const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Innit Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello World"));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API" })
);

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
