/**
 * Builds with an empty deployment path, for serving from a domain root
 * (a user/organisation GitHub Pages site, or any host mounting the site at /).
 *
 * `npm run build` normally auto-detects the path from the git remote; this
 * forces the root layout instead.
 */
import { execSync } from "node:child_process";

execSync("next build", {
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "" },
});