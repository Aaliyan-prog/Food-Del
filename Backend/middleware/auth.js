import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
  try {
    const {token} = req.headers;
    if(!token){
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
    const token_decord = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decord.id;
    next()
  } catch (error) {
      console.error("Auth error:", error.message);
      return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
}

export default authMiddleware