const { readFile } = require("fs/promises");
const path = require("path");
const { xml2json } = require("xml-js");
const { bootstrap } = require("@kaholo/plugin-library");

const { pathExists } = require("./helpers");

async function parse(params) {
  const {
    xmlPath,
  } = params;

  const fileContent = await readFile(xmlPath.absolutePath);
  return xml2json(fileContent, { compact: true });
}

module.exports = bootstrap({
  parse,
});
