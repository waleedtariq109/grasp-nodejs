const fs = require("fs");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textForWrite = `This is what we know about the Avacado: ${textInput}\n Created at: ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textForWrite);
