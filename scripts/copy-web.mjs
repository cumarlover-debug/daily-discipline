// Copies the web app (single source: ./index.html) into ./www for Capacitor.
// www/ is generated — never edit it by hand.
import { cpSync, rmSync, mkdirSync } from "node:fs";

rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const f of ["index.html", "manifest.webmanifest"]) cpSync(f, `www/${f}`);
cpSync("icons", "www/icons", { recursive: true });
console.log("web assets copied to www/");
