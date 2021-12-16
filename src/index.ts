import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { importCsv } from "csv-elasticsearch";
import { Client } from "@elastic/elasticsearch";

yargs(hideBin(process.argv))
  .scriptName("create-elasticsearch-dataset")
  .locale("en")
  .command(
    "$0",
    "Generate a dataset for elasticsearch",
    (yargs) => {
      return yargs.option("name", {
        alias: "n",
        describe: "name of the dataset",
        choices: ["books", "movies"],
        type: "string",
      });
    },
    async (argv) => {
      if (argv.name === "books") {
        const { count } = await importCsv({
          client: new Client({
            node: "http://localhost:9200",
          }),
          index: "books",
          filePath: "./data/books.csv",
        });
        console.log(`Imported ${count} documents in index 'books'`);
      }
    }
  )
  .help()
  .parse();
