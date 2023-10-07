/* eslint-disable no-console */

const yargs = require("yargs");
const path = require("path");
const run = require("./export");
const { globSync } = require("glob");

process.on("unhandledRejection", (e) => {
  console.error(e);
  throw e;
});

process.on("uncaughtException", (e) => {
  console.error(e);
});

const { argv } = yargs
  .usage('$0 --glob "<glob1>" "<glob2>" ... "<globN>"')
  .usage("$0 -F png <source1.drawio> <source2.drawio> ... <sourceN.drawio>")
  .option("F", {
    alias: "fmt",
    describe: "output format",
    type: "string",
    default: "pdf",
  })
  .choices("F", [
    "pdf",
    "png",
    // "cat-pdf",
    // "split-png",
    // "split-pdf",
    // "split-index-png",
    // "split-index-pdf",
    // "split-id-png",
    // "split-id-pdf",
    // "split-name-png",
    // "split-name-pdf",
  ])
  .option("G", {
    alias: "glob",
    describe: "enable glob file matching",
    type: "boolean",
    default: false,
  });

module.exports = async () => {
  if (argv._.length < 1) {
    return yargs.showHelp();
  }

  const format = argv.F;

  for (let i = 0; i < argv._.length; i++) {
    if (argv.G) {
      const files = globSync(argv._[i], { absolute: true });
      for (const file of files) {
        console.log("> Converting %s into %s", file, format);
        await run({
          file,
          format,
          path: `${file}.exported.${format}`,
        });
      }
    } else {
      const file = argv._[i];
      console.log("> Converting %s into %s...", file, format);
      await run({
        file,
        format,
        path: `${file}.exported.${format}`,
      });
    }
  }
};
