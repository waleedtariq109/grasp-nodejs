import { send } from "./request.js";
import { read } from "./response.js";

function customRequest(url, data) {
  send(url, data);
  return read();
}

const res = customRequest("https://google.com", "hello");

console.log(res);
