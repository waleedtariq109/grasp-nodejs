const fs = require("fs");

/**
 * For file opening Nodejs provide 2 functions
 * 1: fs.open(), this .open() is a Ansync function which means we need to pass a callback
 *    along with other params such as `path`, `flag`, `mode`. We need callback because this
 *    function asynchrously which means the `THREAD` where our node application is running
 *    is not blocked and the fs.open doing is work in background and when it's finish working
 *    the callback which we attacted to it immediately trigger.
 *
 * 2: fs.openSync(), this .openSync() is a synchronous version for open a file, when we open
 *    a file using .openSync() the execuation of out program is stopped because it blocks
 *    the `THREAD` where our nodejs application is running and becasue it synchronous and
 *    blocks the execuation so we don't need a callback instead it returns the so called
 *    file descripitor.
 *
 * Comparision: The main difference between both is that the `.open()` runs asynchronously
 * and the `.openSync()` runs synchronously and for `.open()` we have to provide the callback
 * so that we can do all the things which we want after it completes their execuation and
 * for `.openSync()` the program is stoped until `.openSync()` fininsh their execuation
 * and once it's done it returns property descripitor which we can use accordingly
 */

const dirFile = "dir.txt";
const flagsFile = "flags.txt";

fs.open(flagsFile, "r+", (err, fileDescripitor) => {
  if (err) return console.log(`Code: ${err.code}\nMessage: ${err.message}`);
  console.log(`File: (${fileDescripitor}) is opened!`);

  fs.close(fileDescripitor, (_) => console.log("File has been closed"));
});
