import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.app('/signup', signup);