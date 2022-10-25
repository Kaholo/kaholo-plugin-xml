const { readFile } = require("fs/promises");
const path = require("path");
const xml2js = require("xml2js");
const { bootstrap } = require("@kaholo/plugin-library");

const { pathExists } = require("./helpers");

async function parse(params) {
  const {
    xmlPath,
  } = params;

  const absoluteXmlPath = path.resolve(xmlPath);
  if (!await pathExists(absoluteXmlPath)) {
    throw new Error(`Path ${xmlPath} does not exist on agent!`);
  }

  const parser = new xml2js.Parser();
  const fileContent = await readFile(absoluteXmlPath);

  return parser.parseStringPromise(fileContent);
}

module.exports = bootstrap({
  parse,
});
