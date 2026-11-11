const { characters } = require("../character");
const { defFilePath } = require("../defFilePath");
const { writeFile } = require("../utils/fileSys");

const editChar = (req, res) => {
  try {
    const { name, age } = req.body;

    const character = characters.characters.find(
      (char) => char.name.toLowerCase() === name.toLowerCase()
    );

    if (!character) {
      return res.status(404).json({
        message: "Character not found"
      });
    }

    character.age = String(age);

    writeFile(defFilePath, characters);

    return res.status(200).json({
      message: "Character updated successfully",
      data: character
    });

  } catch (e) {
    console.error("Error in edit character controller: ", e);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

module.exports = { editChar };