const { characters } = require("../character");
const { defFilePath } = require("../defFilePath");
const { writeFile } = require("../utils/fileSys");

const addChar = (req, res) => {
  try {
    const payload = req.body;
    characters.characters.push(payload);
    writeFile(defFilePath, characters);
    res
      .status(200)
      .json({ message: "Character added successfully", data: characters });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
    console.error("Error in add character controller: ", e);
  }
};

module.exports = { addChar };