const { readFile } = require("fs/promises");
const path = require("path");
const { xml2json } = require("xml-js");
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

  const fileContent = await readFile(absoluteXmlPath);
  return xml2json(fileContent, { compact: true });
}

module.exports = bootstrap({
  parse,
});
