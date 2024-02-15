import { send } from "./request.mjs";
import { read } from "./response.mjs";

function customRequest(url, data) {
  send(url, data);
  return read();
}

const res = customRequest("https://google.com", "hello");

console.log(res);
