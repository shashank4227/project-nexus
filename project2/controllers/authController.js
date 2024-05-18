const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("index", { signuperror: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.render("home", { name: newUser.name, email: newUser.email });
  } catch (error) {
    res.render("index", { error: "Error signing up: " + error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render("index", { error: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // Authentication successful, redirect or send response as needed
      return res.render("home", { name: user.name, email: user.email });
    } else {
      return res.render("index", { error: "Invalid credentials" });
    }
  } catch (error) {
    return res.render("index", { error: "Error logging in: " + error.message });
  }
};
