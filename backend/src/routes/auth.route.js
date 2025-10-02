import express from "express";
import { logout, signup, login, updateProfile, checkAuth } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"; 

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

// Update profile (protected)
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check",protectRoute,checkAuth)

export default router;
