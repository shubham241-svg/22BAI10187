import express from   'express';
import { latestandTopPosts } from '../controllers/post.controller.js';


const router = express.Router();    

router.get("/", latestandTopPosts)

export default router;