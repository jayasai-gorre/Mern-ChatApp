import jwt from 'jsonwebtoken';
import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({error: "Unauthorized - No token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("password");

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protection middleware: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
} 

export default protectRoute