const request = require("./request");
const read = require("./response");

function customRequest(url, data) {
  request.send(url, data);
  return read();
}

const res = customRequest("https://google.com", "hello");

console.log(res);
