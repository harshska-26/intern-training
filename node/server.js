const express = require("express");
const { validateChar } = require("./Validations/addCharVal.validation");
const { delCharVal } = require("./Validations/delCharVal.validation");
const { addChar } = require("./controllers/addCharCtrl.controller");
const { delCharCtrl } = require("./controllers/delCharCtrl.controller");
const { characters } = require("./character");
const { editChar } = require("./controllers/editChar.controller");
const { validateEditChar } = require("./Validations/validateEditChar.validation.js");



const app = express();

//middleware
app.use(express.json());

//added
const PORT = 3000;

//endpoints
app.get("/getChars", (req, res) => {
  res.status(200).json({ data: characters });
});

app.post("/addCharacter", validateChar, addChar);

app.delete("/deleteCharacter", delCharVal, delCharCtrl);
app.put("/editCharacter", validateEditChar, editChar);


app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
