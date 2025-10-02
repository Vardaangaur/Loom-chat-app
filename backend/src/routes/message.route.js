import express from "express"
const router =express.Router();
import { getMessages, sendMessage, getUsersForSidebar } from "../controller/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage)
export default router