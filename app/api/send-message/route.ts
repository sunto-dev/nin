import { NextRequest, NextResponse } from "next/server";

const LINE_BOT_API = "https://api.line.me/v2/bot";
const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    // รับ body จาก request
    const body = await request.json();
    console.log("Request body:", body);
    console.log("LINE Token:", LINE_CHANNEL_ACCESS_TOKEN ? "Set" : "Missing");

    const { userId, message } = body;

    // ตรวจสอบว่ามี userId และ message
    if (!userId || !message) {
      return NextResponse.json(
        {
          error: "userId and message are required",
        },
        { status: 400 }
      );
    }

    // ตรวจสอบว่ามี LINE_CHANNEL_ACCESS_TOKEN
    if (!LINE_CHANNEL_ACCESS_TOKEN) {
      return NextResponse.json(
        {
          error: "LINE_CHANNEL_ACCESS_TOKEN is not configured",
        },
        { status: 500 }
      );
    }

    const messageBody = {
      to: userId,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    };

    console.log("Sending to LINE:", messageBody);

    const response = await fetch(`${LINE_BOT_API}/message/push`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(messageBody),
    });

    const responseData = await response.json();
    console.log("LINE response:", responseData);

    if (!response.ok) {
      throw new Error(`LINE API Error: ${response.status}`);
    }

    return NextResponse.json({
      message: "Send message success",
      responseData: responseData,
    });
  } catch (error: any) {
    console.error("Error details:", error);

    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
