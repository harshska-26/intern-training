const { characters } = require("../character");
const { defFilePath } = require("../defFilePath");
const { writeFile } = require("../utils/fileSys");

const delCharCtrl = (req, res) => {
    try{
        const { name } = req.body;
        characters.characters.find((char) => char.name === name);
        if(!characters.characters.find((char) => char.name === name)){
            return res.status(404).json({message: "Character not found"});
        }
        characters.characters = characters.characters.filter((char) => char.name !== name);
        writeFile(defFilePath, characters);
        res.status(200).json({message: "Character deleted successfully", data: characters});
    }catch(e){
        console.error("Error in delete character controller: ", e);
        return res.status(500).json({message: "Controller error"});
    }
}

module.exports = { delCharCtrl };