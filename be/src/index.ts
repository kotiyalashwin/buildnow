import Anthropic from "@anthropic-ai/sdk";
import express from "express";
require("dotenv").config();
import { basePrompt as reactBasePrompt } from "./defaults/react";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { TextBlock } from "@anthropic-ai/sdk/resources";
import { BASE_PROMPT } from "./prompt";
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
      prompts: [
        BASE_PROMPT,
        `Here is an artifact that contains all the availbale files to you.\n Consider the content of ALL the files in the project.\n\n${reactBasePrompt}\n\n Here is a list of files that are hidden from you but exist on the system and are not shown to you:\n\n -.gitignore\n -package-lock.json\n`,
      ],
      //seperate the ui prompt
      uiPrompts: [reactBasePrompt],
    });
    return;
  }
  if (answer === "nodejs") {
    res.json({
      prompts: [
        `Here is an artifact that contains all the availbale files to you.\n Consider the content of ALL the files in the project.\n\n${nodeBasePrompt}\n\n Here is a list of files that are hidden from you but exist on the system and are not shown to you:\n\n -.gitignore\n -package-lock.json\n`,
      ],
      //seperate the ui prompt
      uiPrompt: [nodeBasePrompt],
    });

    return;
  }
});

//TO CLAUDE
//1st message - list of all project files visible to you
//2nd message(only React) - for all i tell make them beautifule
//3rd message - bolt running command. will contain what user has asked for

//Chat endpoint
//simply the prompt from the user
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
