import {Admin} from "../models/admin.model.js";

const adminRegister = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    console.log(req.body);

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({email});
    if (existingAdmin) {
      return res.status(400).json({message: "Admin already registered"});
    }

    // Create new admin (Password will be hashed automatically)
    const newAdmin = await Admin.create({name, email, password});

    res.status(201).json({
      message: "Admin created successfully",
      newAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error", error});
  }
};

// admin  login controller
const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({email});
    if (!admin) {
      return res.status(400).json({message: "Admin not found"});
    }

    // Check if the password matches
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    // Generate JWT Token
    const token = admin.generateToken();

    // Store token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.status(200).json({
      message: "Login successful",
      admin,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error", error});
  }
};

export {adminRegister, adminLogin};
