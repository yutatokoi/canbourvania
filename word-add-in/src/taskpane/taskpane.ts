/* eslint-disable @typescript-eslint/no-unused-vars */
/* global Word console */

import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

Office.context.document.addHandlerAsync(
  Office.EventType.DocumentSelectionChanged,
  async function () {
    try {
      // Get the current selection
      const selection = await Word.run(async (context) => {
        const range = context.document.getSelection();
        range.load("text");
        await context.sync();
        return range.text;
      });

      if (selection.length === 0) {
        return;
      }

      writeSelection(selection);

      const loadingElement = document.getElementById("loading");
      loadingElement.style.display = "block";

      const response = await postToDify(selection, "app-Gg5hPNu8Nqq9GhuXxzjZsrsj");

      const answerDiv = document.getElementById("answer");
      loadingElement.style.display = "none";

      try {
        const html = await markdownToHtml(response.answer);
        answerDiv.innerHTML = html;
      } catch {
        answerDiv.innerHTML = `<p>${response.answer}</p>`;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
  function (result) {
    if (result.status === Office.AsyncResultStatus.Failed) {
      console.error("Failed to add handler:", result.error);
    }
  }
);

function writeSelection(message: string) {
  document.getElementById("selection").innerText = message;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processor = unified().use(remarkParse).use(remarkHtml);
  const result = await processor.process(markdown);
  return String(result);
}

type DifyResponse = {
  event: string;
  message_id: string;
  conversation_id: string;
  mode: string;
  answer: string;
  metadata: {
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
      total_price: string;
      currency: string;
      latency: number;
    };
    retriever_resources: Array<{
      position: number;
      dataset_id: string;
      document_name: string;
      score: number;
      content: string;
    }>;
  };
  created_at: number;
};

const postToDify = async (query: string, apiKey: string): Promise<DifyResponse> => {
  const response = await fetch("https://api.dify.ai/v1/chat-messages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: {},
      query,
      response_mode: "blocking",
      conversation_id: "",
      user: "abc-123",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
