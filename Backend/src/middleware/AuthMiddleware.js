import jwt from 'jsonwebtoken';
import { Admin } from '../models/admin.model.js'; // Replace with your actual admin model

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach the decoded admin information to the request object
    req.admin = decoded;

    // Check if the admin exists in the database (optional)
    const admin = await Admin.findById(decoded.adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    next(); // If everything is okay, proceed to the next middleware or route handler
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
