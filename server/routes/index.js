import express from 'express';
import websenpaiRouter from '../routes/websenpai/websenpai'

const router = express.Router();

router.use('/websenpai', websenpaiRouter);

router.use('/', (req,res,next) => {
    res.status(404).send("PAGE NOT FOUND");
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

export default router;