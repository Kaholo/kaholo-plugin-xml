const fs = require("fs");
const { access } = require("fs/promises");

async function pathExists(path) {
  try {
    await access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  pathExists,
};
