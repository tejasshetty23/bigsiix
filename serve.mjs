/* Local dev server.  Run:  node serve.mjs   ->  http://localhost:3000
   Not needed for deployment — static hosts serve index.html themselves. */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".mjs":  "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const rel = url === "/" ? "index.html" : url.replace(/^\/+/, "");
    const file = path.join(ROOT, rel);

    // don't serve anything outside the project folder
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    fs.readFile(file, (err, buf) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
        res.end("<h1>404</h1><p>Not found: " + rel + "</p>");
        console.log("404  " + rel);
        return;
      }
      res.writeHead(200, {
        "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
        "cache-control": "no-store", // always serve your latest edits
      });
      res.end(buf);
      console.log("200  " + rel);
    });
  })
  .listen(PORT, () => {
    console.log(`\n  BIGSIIX running at  http://localhost:${PORT}\n  Ctrl+C to stop\n`);
  });
