import Anthropic from "@anthropic-ai/sdk";
require("dotenv").config();
import { basePrompt } from "./defaults/react";
const anthropic = new Anthropic();

async function main() {
  await anthropic.messages
    .stream({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 8192,
      temperature: 0,
      messages: [
        {
          role: "user",
          content:
            "For all the apps use a generalised way and make them beautiful",
        },
        {
          role: "user",
          content: basePrompt,
        },
        {
          role: "user",
          content: "create a todo app",
        },
      ],
    })
    .on("text", (response) => {
      console.log(response);
    });
}

main();
