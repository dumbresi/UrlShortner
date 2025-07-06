import express from 'express'
import healthController from '../controller/healthController.js';

const router= express.Router();

router.get('/healthz',healthController.healthz);


export default router
