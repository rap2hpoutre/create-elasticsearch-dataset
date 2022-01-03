import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { importCsv } from "csv-elasticsearch";
import { Client } from "@elastic/elasticsearch";
const path = require("path");

yargs(hideBin(process.argv))
  .scriptName("create-elasticsearch-dataset")
  .locale("en")
  .command(
    "$0",
    "Generate a dataset for elasticsearch",
    (yargs) => {
      return yargs.option("dataset", {
        alias: "d",
        describe: "name of the dataset",
        choices: ["books", "movies"],
        type: "string",
        required: true,
      });
    },
    async (argv) => {
      let filePath = "";
      const index = argv.dataset || "";
      switch (argv.dataset) {
        case "books":
          filePath = path.resolve(__dirname, "../data/books.csv");
          break;
        case "movies":
          filePath = path.resolve(__dirname, "../data/movies.csv");
          break;
        default:
          console.error("Invalid dataset name");
          process.exit(1);
      }
      console.log(`Importing documents into index '${index}'…`);
      const { count } = await importCsv({
        client: new Client({ node: "http://localhost:9200" }),
        index,
        filePath,
      });
      console.log(`Imported ${count} documents into index '${index}'`);
    }
  )
  .help()
  .parse();
