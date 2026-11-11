const delCharVal = (req, res, next) => {
    try{
        const { name } = req.body;
        if(!name){
            return res.status(400).json({message: "Name is required"});
        }
        next();
    }catch(e){
        console.error("Error in delete character validation: ", e);
        return res.status(500).json({message: "Internal server error"});
    }
}

module.exports = { delCharVal };