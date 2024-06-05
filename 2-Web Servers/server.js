// Node Example
const fs = require("fs");
const https = require("https");
const axios = require("axios");

const buffer = fs.readFileSync("cert.crt");
const keyBuffer = fs.readFileSync("key.pem");
const csBuffer = fs.readFileSync("ca.pem");

const cert = buffer.toString("utf-8");
const key = keyBuffer.toString("utf-8");
const ca = csBuffer.toString("utf-8");

const httpsAgent = new https.Agent({
  // This is your application certificate
  cert,
  // This is your private key associated with application certificate
  key,
  // This is Lean's public certificate chain.
  ca,
});
const start = async () => {
  try {
    const request = await axios({
      method: "post",
      headers: {
        "lean-app-token": "7d6a0c9f-2e37-4062-a07b-2d55ffe9e80f",
      },
      httpsAgent,
      // You can change the end point per your need. This endpoint is good for
      // testing mTLS
      url: "https://mtls.sandbox.sa.leantech.me/verifications/v2/iban",
      withCredentials: true,
      jar: true,
      data: JSON.stringify({
        type: "PERSONAL",
        iban: "SA2810000011100000461309",
        identifications: [{ type: "NATIONAL_ID", value: "1106972886" }],
      }),
    });
    console.log(request);
  } catch (error) {
    console.log(error);
  }
};
start();
