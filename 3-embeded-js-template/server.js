const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const PORT = 3000;
const HOSTNAME = "127.0.0.1";

// Getting Data

const navbarDataJSON = fs.readFileSync("./database/app.json", "utf-8");
const appDataJSON = fs.readFileSync("./database/data.json", "utf-8");

//Parsed JSON
const navbarData = JSON.parse(navbarDataJSON);
const appData = JSON.parse(appDataJSON);

// Reading Template
const navbarTemplate = fs.readFileSync("./src/components/navbar.ejs", "utf-8");
const mainTemplate = fs.readFileSync("./src/layouts/main.ejs", "utf-8");
const homepageTemplate = fs.readFileSync("./src/views/home.ejs", "utf-8");
const historyTemplate = fs.readFileSync("./src/views/history.ejs", "utf-8");
const operationsTemplate = fs.readFileSync(
  "./src/views/operations.ejs",
  "utf-8"
);

// Compile Template
const compiledNavbar = ejs.compile(navbarTemplate);
const compiledMain = ejs.compile(mainTemplate);
const compledHomePage = ejs.compile(homepageTemplate);
const compiledHistoryPage = ejs.compile(historyTemplate);
const compiledOperationPage = ejs.compile(operationsTemplate);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const renderNavbar = compiledNavbar({
    siteName: navbarData?.siteName,
    navLinks: navbarData?.navbarLinks,
  });
  const renderHomePage = compledHomePage({ home: appData?.home });
  const renderHistoryPage = compiledHistoryPage({ history: appData?.history });
  const renderOperationsPage = compiledOperationPage({
    operations: appData?.operations,
  });
  const renderedMain = compiledMain({
    navbar: renderNavbar,
    path: req.url,
    home: renderHomePage,
    operations: renderOperationsPage,
    history: renderHistoryPage,
  });
  res.end(renderedMain);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
