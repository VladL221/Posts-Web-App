const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  try {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "this_is_a_very_not_long_secret_but_to_be_honest_not_long_enough_123_some_numbers_321_stronk_secret");
  next();
  } catch (error) {
    res.status(401).json({message: "Auth failed! "});
  }
};
