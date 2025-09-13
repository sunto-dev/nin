const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

require("dotenv").config();

const PORT = "8888";

const LINE_BOT_API = "https://api.line.me/v2/bot/";

const headers = {
  "content-type": "application/json",
  Authorization:
    "Bearer 4IFA2ZfpW8vaIAhlF4gC5AcZ4zKfYGO/Mn5CcEOr0H6XZ92acMS+83n1ce5DNftkewiBiWg12m+mDJhIanxPOwPCbQ8e51hw6VCSKYUZBCnP1Er5+9FAGKZX/Q3ZaMQyGS9lRxHY3+N8D+qe79pEPAdB04t89/1O/w1cDnyilFU=",
};

app.post("/send-message", async (req: any, res: any) => {});

app.listen(PORT, (req: any, res: any) => {
  console.log(`run at http://localhost:${PORT}`);
});
