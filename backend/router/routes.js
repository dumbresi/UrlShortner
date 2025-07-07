import express from 'express'
import healthController from '../controller/healthController.js';
import shortHandler from '../controller/shortHandler.js';

const router= express.Router();

router.get('/healthz',healthController.healthz);
router.put('/shorten',shortHandler.shorten);
router.get('/tinyUrl/:uuid',shortHandler.getLong);


export default router
