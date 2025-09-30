const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

const PORT = 8888;

const LINE_BOT_API = "https://api.line.me/v2/bot";

const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
};

app.post("/send-message", async (req: any, res: any) => {
  try {
    console.log("Request body:", req.body);
    console.log("LINE Token:", LINE_CHANNEL_ACCESS_TOKEN ? "Set" : "Missing");

    const { userId, message } = req.body;
    if (!userId || !message) {
      return res.status(400).json({
        error: "userId and message are required",
      });
    }

    const body = {
      to: userId,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    };

    console.log("Sending to LINE:", body);

    const response = await axios.post(`${LINE_BOT_API}/message/push`, body, {
      headers,
    });
    console.log("LINE response:", response.data);

    res.json({
      message: "Send message success",
      responseData: response.data,
    });
  } catch (error: any) {
    console.log("Full error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to send message",
      details: error.response?.data || error.message,
    });
  }
});

app.get("/health", (req: any, res: any) => {
  res.json({
    status: "ok",
    token: LINE_CHANNEL_ACCESS_TOKEN ? "Set" : "Missing",
    port: PORT,
  });
});

app.post("/webhook", async (req: any, res: any) => {
  const { events } = req.body;

  if (!events || events.length === 0) {
    res.json({ message: "OK" });

    return false;
  }
  console.log("events", events);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`💬 Send message: POST http://localhost:${PORT}/send-message`);
});
