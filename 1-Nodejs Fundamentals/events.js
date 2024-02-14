const Emitter = require("events");

const pakElection = new Emitter();

// Observer 1 for Patwari
pakElection.on("lumber1", (result) => {
  if (result === "FORM-47") console.log("Patwari: N League jeet gai");
  else console.log("Youthyaa: FORM-45 k hisab sai ham jeety hai");
});

// Observer 2 for Youthyaa
pakElection.on("lumber1", (result) => {
  if (result === "FORM-47")
    console.log("Youthyaa: N League nai dhandlii kii hai");
  else console.log("Patwari: FORM-47 k hisab sai ham jeety hai");
});

process.on("exit", (code) => {
  console.log("Process exit event with code:", code);
});

pakElection.emit("lumber1", "FORM-45");
