//const express = require('express');
import express from 'express'
import prisma from '../utils/prisma.js';

import roomRoutes from './roomRoutes.js'

const router = express.Router();

//Change this code
// router.use('/', require('./...'));
router.use('/rooms', roomRoutes);

export default router;