import { User } from "../model/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
      const { token } = req.cookies;
  
      if (!token) {     //no login
        return res.status(400).json({
          success: false,
          message: "Login to Access this resource",
        });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findById(decoded._id);
  
      req.user = user;  //gives info of user
  
      next();       //callback
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };