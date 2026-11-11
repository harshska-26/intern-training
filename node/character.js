const { readFile } = require("./utils/fileSys");
const { defFilePath } = require("./defFilePath");

const characters = readFile(defFilePath);

module.exports = { characters };