// News-image entry for make.fun: "Sum up 21 November's world news in one image".
// The entry image is entry.png beside this file; the program copies it to
// the output directory. Node 22, standard library only, no network, and the
// same bytes come out every run because the image is fixed.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
