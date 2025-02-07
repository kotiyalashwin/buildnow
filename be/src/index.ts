require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";
import express from "express";
import { TextBlock } from "@anthropic-ai/sdk/resources";
import { nodeBase } from "./defaults/node";
import { BASE_PROMPT, getSystemPrompt } from "./prompt";
import { reactBase } from "./defaults/react";
const anthropic = new Anthropic();
const app = express();
app.use(express.json());

//generate the templates for UI and Ai
//figure out that it is a react project of a nodejs project
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
      type: "React Project",
      prompts: [
        BASE_PROMPT,
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBase}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompt: [reactBase],
    });
    return;
  }
  if (answer === "nodejs") {
    res.json({
      type: "Nodejs Project",
      prompts: [
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodeBase}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompt: [nodeBase],
    });
  }
});

//TO CLAUDE
//1st message - list of all project files visible to you
//2nd message(only React) - for all i tell make them beautifule
//3rd message - bolt running command. will contain what user has asked for

//Chat endpoint
//simply the prompt from the user

app.post("/chat", async (req, res) => {
  const messages = req.body.message;
  const respose = await anthropic.messages.stream({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    temperature: 0,
    system: getSystemPrompt(),
    messages: messages,
  });
});
app.listen(8080);
