const fs = require("fs");

// Blocking/Synchronous way
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textForWrite = `This is what we know about the Avacado: ${textInput}\n Created at: ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textForWrite);
console.log("File Written!");

// Non-Blocking Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
