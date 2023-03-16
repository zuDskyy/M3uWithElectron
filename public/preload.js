// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge } = require("electron");


process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
});