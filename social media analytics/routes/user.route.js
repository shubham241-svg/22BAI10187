import express from 'express';
import {TopUsers} from "../controllers/user.controller.js";

const router = express.Router();

router.get('/', TopUsers);

export default router;