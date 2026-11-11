const validateChar = (req, res, next) => {
  try {
    const { name, age, gender, power } = req.body;

    if (!name || !age || !gender || !power) {
      return res.status(400).json({ message: "All fields are required" });
    }

    next();
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error in validation middleware: ", e);
  }
};

module.exports = { validateChar };