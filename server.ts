import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

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

interface SendMessageRequest {
  userId: string;
  message: string;
}

app.post(
  "/send-message",
  async (req: Request<{}, {}, SendMessageRequest>, res: Response) => {
    try {
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

      const response = await axios.post(`${LINE_BOT_API}/message/push`, body, {
        headers,
      });
      console.log("response", response.data);

      res.json({
        message: "Send message success",
        responseData: response.data,
      });
    } catch (error: any) {
      console.log("error", error.response?.data || error.message);
      res.status(500).json({
        error: "Failed to send message",
        details: error.response?.data || error.message,
      });
    }
  }
);

// ✅ แก้ไข - ขาด / หน้า health
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    token: LINE_CHANNEL_ACCESS_TOKEN ? "Set" : "Missing",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
