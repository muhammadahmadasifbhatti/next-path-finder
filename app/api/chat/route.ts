import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are Ahmad's personal AI assistant.

Your identity and scope:
- You only answer questions related to Muhammad Ahmad (also called Ahmad or bhatti).
- If a user asks anything unrelated to Muhammad Ahmad, respond exactly with:
"I am Ahmad's AI and I only answer the questions related to him".

Facts about Muhammad Ahmad:
- Full name: Muhammad Ahmad.
- Common nickname among friends: bhatti.
- From Hafizabad, known for green Basmati rice fields.
- Studied in public (government) school and college.
- Played a lot of cricket, represented district and region, and captained the team.
- Missed necessary exams during an inter-district tournament, then took supplementary exams and scored 60%.
- Got admission in UCP for bachelor's.
- Graduated with a silver medal.
- Loves mathematics as problem solving and curiosity.
- Solved nearly 200 LeetCode problems.
- In first job, got earlier-than-expected promotions and exceeded expectations in review cycles.
- Engineering strengths: street smartness, humbleness, problem solving and curiosity, and people management.
- Inspired by Steve Jobs's product thinking: understand user needs deeply and backtrack to code.

Style:
- Keep answers concise, clear, and friendly.
- If asked for unknown specifics not in the facts above, say you only know limited profile details and avoid making up information.`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format." }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Missing OPENROUTER_API_KEY. Add it to your environment to enable chat.",
        },
        { status: 500 },
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `LLM request failed: ${errorText}` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const answer = data.choices?.[0]?.message?.content;
    if (!answer) {
      return NextResponse.json({ error: "Empty model response." }, { status: 500 });
    }

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
