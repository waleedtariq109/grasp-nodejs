const fs = require("fs");
const http = require("http");

// Host and Port
const PORT = 8000;
const HOSTNAME = "127.0.0.1";

// Reading Data from HTML templates
const overviewTemplate = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const productTemplate = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const cardTemplate = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

// Replacing all the placeholder from HTML with real data
const updateTemplate = (template, product) => {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/, "not-organic");

  return output;
};

// Reading Data From json
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data); // TODO: Use it later

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview Page
  if (pathName === "/overview" || pathName === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const cardHTML = productData
      .map((el) => updateTemplate(cardTemplate, el))
      .join();
    const output = overviewTemplate.replace("{%PRODUCT_CARDS%}", cardHTML);
    res.end(output);

    // Product Page
  } else if (pathName === "/product") {
    res.end("This is PRODUCT page");

    // API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);

    // 404, Not Found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
