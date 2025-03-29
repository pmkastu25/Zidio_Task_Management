const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const router = express.Router();

// Register User
const userRegister =  async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userCount = await User.countDocuments()
    console.log(userCount,"count")

    const updatedRole = userCount >=  3 ? 'Editor' : 'Admin'
    console.log(updatedRole,'role')

    const newUser = new User({ name, email, password: hashedPassword, role:updatedRole });
    console.log(newUser,'user')
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Login User
const userLogin =  async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "3d" });
    return res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {userLogin,userRegister}
