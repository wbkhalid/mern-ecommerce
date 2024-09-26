const { UserModel } = require("../models/User");
const { asyncHandler } = require("../middleware/async");
const { ErrorResponse } = require("../utils/errorResponse");
const { encryptPassword, comparePassword } = require("../common/bcrypt");
const { generateToken } = require("../common/jwt");

module.exports = {
  login: asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("Please provide an email and password", 400));
    }
    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    const token = generateToken(user._id);
    res.status(200).json({ success: true, token });
  }),

  register: asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new ErrorResponse("Please provide name, email and password", 400));
    }
    //if email already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return next(new ErrorResponse("User already exists", 400));
    }
    const user = await UserModel.create({
      name,
      email,
      password: await encryptPassword(password),
    });
    const token = generateToken(user._id);
    res.status(201).json({ success: true, token });
  }),
};
