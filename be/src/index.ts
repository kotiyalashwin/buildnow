import Anthropic from "@anthropic-ai/sdk";
import express from "express";
require("dotenv").config();
import {
  basePromp,
  basePromp as reactBasePrompt,
  refPrompt as reactRefPrompt,
  runningCommand as reactRunning,
} from "./defaults/react";

import {
  basePrompt as nodeBasePrompt,
  runningCommand as nodeRunnig,
} from "./defaults/node";
import { TextBlock } from "@anthropic-ai/sdk/resources";
const anthropic = new Anthropic();
const app = express();
app.use(express.json());

app.post("/template", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    temperature: 0,
    messages: [
      {
        role: "user",
        content: `For the given message identify wether it is a react appliation or nodejs application. Once you identify, your response should be either "react" or "nodejs". Do not respond with any other value than any one of these texts. The prompt is : ${prompt}. `,
      },
    ],
  });

  const answer = (response.content[0] as TextBlock).text;

  if (answer === "react") {
    res.json({
      prompts: [reactBasePrompt, reactRefPrompt, reactRunning(prompt)],
    });
    return;
  }
  if (answer === "nodejs") {
    res.json({
      prompts: [nodeBasePrompt, nodeRunnig(prompt)],
    });

    return;
  }
});

// async function main() {
//   await anthropic.messages
//     .stream({
//       model: "claude-3-5-sonnet-20241022",
//       max_tokens: 8192,
//       temperature: 0,
//       messages: [
//         {
//           role: "user",
//           content:
//             "For all the apps use a generalised way and make them beautiful",
//         },
//         {
//           role: "user",
//           content: "fafaf",
//         },
//         {
//           role: "user",
//           content: "create a todo app",
//         },
//       ],
//     })
//     .on("text", (response) => {
//       console.log(response);
//     });
// }

// main();

app.listen(8080);
