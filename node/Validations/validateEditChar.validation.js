const validateEditChar = (req, res, next) => {
  try {
    const { name, age } = req.body;

    if (!name || age === undefined || age === null || age === "") {
      return res.status(400).json({
        message: "Name and age are required"
      });
    }

    next();
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    });
    console.log("Error in edit validation middleware: ", e);
  }
};

module.exports = { validateEditChar };