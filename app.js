const fs = require("fs");
const xml2js = require("xml2js");

function parse(action) {
  return new Promise((resolve, reject) => {
    if (!action.params.xmlPath) {
      reject(new Error("XML file path must be specified"));
    }

    const parser = new xml2js.Parser();
    fs.readFile(action.params.xmlPath, (readError, data) => {
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

module.exports = {
  parse,
};
