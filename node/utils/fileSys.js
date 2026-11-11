const fs = require("fs");

const writeFile = (filePath, data) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
};

const readFile = (filePath) => {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
};

module.exports = { writeFile, readFile };