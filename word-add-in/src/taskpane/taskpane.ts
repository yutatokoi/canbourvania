/* eslint-disable @typescript-eslint/no-unused-vars */
/* global Word console */

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

      // Write the selected text to the message element
      write(selection);
    } catch (error) {
      console.error("Error:", error);
      write("Error getting selection");
    }
  },
  function (result) {
    if (result.status === Office.AsyncResultStatus.Failed) {
      console.error("Failed to add handler:", result.error);
    }
  }
);

function write(message) {
  document.getElementById("message").innerText += message;
}
