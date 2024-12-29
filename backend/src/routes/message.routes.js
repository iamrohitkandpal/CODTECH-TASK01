import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getChats, getChatUsers, sendChat } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/users", protectRoute, getChatUsers);
router.get("/:id", protectRoute, getChats);

router.post("/send/:id", protectRoute, sendChat);

export default router;