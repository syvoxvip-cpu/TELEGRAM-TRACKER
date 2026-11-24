const express = require("express");
const app = express();

app.use(express.json());

// Health check / browser test route
app.get("/", (req, res) => {
  res.status(200).send("Telegram Tracker Server is running!");
});

// Telegram webhook endpoint
app.post("/webhook", (req, res) => {
  console.log("Received update:", JSON.stringify(req.body, null, 2));
  res.status(200).json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server listening on port ${PORT});
});
