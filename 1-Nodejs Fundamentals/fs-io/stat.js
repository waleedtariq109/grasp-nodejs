const fs = require("fs");

/**
 * For get information about file or directory opening Nodejs provide 2 functions
 *
 * 1: `fs.stat()` is used to get the information about the file or firectory like
 *    when was the file last modified, created, permission and what kind of access
 *    the given file has and it runs asynchronously which means we need to attached the callback
 *    anf the callback runs right after `fs.stat()` finish it's execuation
 *
 * 2: `fs.statSync()`, like fs.stat, The .statSync runs synchronously and returns a something like
 *     information object
 *
 */

const dirFile = "dir.txt";
const flagsFile = "flags.txt";

// Sync way
let stat = fs.statSync(dirFile);
console.log(stat.size);
console.log(stat.isFile());
console.log(stat.isDirectory());

// Aync way
fs.stat(flagsFile, (err, fileInfo) => {
  if (err) return console.log(err.message);

  console.log(fileInfo.isFile());
  console.log(fileInfo.isDirectory());
});
