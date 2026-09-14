// Copies the web app (single source: ./index.html) into ./www for Capacitor.
// www/ is generated — never edit it by hand.
import { cpSync, rmSync, mkdirSync, readdirSync } from "node:fs";

// Empty www/ rather than deleting it: on Windows a locked folder (OneDrive, Explorer, a dev server) can't be removed.
mkdirSync("www", { recursive: true });
for (const entry of readdirSync("www")) rmSync(`www/${entry}`, { recursive: true, force: true });
for (const f of ["index.html", "manifest.webmanifest"]) cpSync(f, `www/${f}`);
cpSync("icons", "www/icons", { recursive: true });
console.log("web assets copied to www/");
