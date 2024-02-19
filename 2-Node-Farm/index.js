const fs = require("fs");

// Blocking/Synchronous way
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
//* console.log(textInput);

const textForWrite = `This is what we know about the Avacado: ${textInput}\n Created at: ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textForWrite);
//* console.log("File Written!");

// Non-Blocking Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err1, data1) => {
  if (err1) return console.log(err1.message);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err2, data2) => {
    if (err2) return console.log(err2.message);
    fs.readFile("./txt/append.txt", "utf-8", (err3, data3) => {
      if (err3) return console.log(err3.message);
      // Write the prepared data in `./txt/final.txt` file
      const prepareData = `${data2}\n${data3}`;
      fs.writeFile(
        "./txt/final.txt",
        `${prepareData}\n${Date.now()}`,
        "utf-8",
        (err4) => {
          if (err4) return console.log(err1.message);
          console.log("Your data has been written");
        }
      );
    });
  });
});
