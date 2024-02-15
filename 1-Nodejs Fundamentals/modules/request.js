function encrypt(data) {
  return "Entrypted data";
}

module.exports.send = function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
};
