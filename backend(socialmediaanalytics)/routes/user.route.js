import express from 'express';
import { TopUsers } from '../controllers/User.controller.js';

const router = express.Router();

router.get('/', TopUsers);

export default router;