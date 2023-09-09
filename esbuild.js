const esbuild = require("esbuild");
const postCssPlugin = require('esbuild-style-plugin')

const config = {
  minify: false,
  bundle: true,
  loader: { ".ts": "ts" },
}

async function watch() {
  let modal_context = await esbuild.context({
    entryPoints: ["./src/test/main.tsx"],
    outfile: "./src/test/main.js",
    ...config,
  });
  await modal_context.watch();
  console.log('\x1b[36mApp build successfully!\x1b[0m');
  console.log('\x1b[33mStarted development server... \x1b[0m');
}

watch();
