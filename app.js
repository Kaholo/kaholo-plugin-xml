const fs = require('fs');
const xml2js = require('xml2js');

function parse(action) {
    return new Promise((resolve, reject) => {
        if (!action.params.xmlPath)
            return reject("XML file path must be specified");

        let parser = new xml2js.Parser();
        fs.readFile(action.params.xmlPath, function(err, data) {
            if (err) return reject(err);
            
            parser.parseString(data, function (err, result) {
                if (err) return reject(err);

                resolve(result);
            });
        });
    });
};

module.exports = {
    parse: parse
}