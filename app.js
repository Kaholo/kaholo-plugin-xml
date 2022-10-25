const { bootstrap } = require("@kaholo/plugin-library");
const fs = require("fs");
const xml2js = require("xml2js");

function parse(params) {
  const {
    xmlPath,
  } = params;

  return new Promise((resolve, reject) => {
    if (!xmlPath) {
      reject(new Error("XML file path must be specified"));
    }

    const parser = new xml2js.Parser();
    fs.readFile(xmlPath, (readError, data) => {
      if (readError) {
        reject(readError);
      }

      parser.parseString(data, (parseError, result) => {
        if (parseError) {
          reject(parseError);
        }

        resolve(result);
      });
    });
  });
}

module.exports = bootstrap({
  parse,
});
