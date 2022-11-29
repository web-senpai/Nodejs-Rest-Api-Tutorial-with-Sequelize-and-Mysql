import express from 'express';
import WebsenpaiController from '../../controllers/Websenpai/websenpai'

const router = express.Router();

//Create request
router.post('/create', WebsenpaiController.createWebsenpai.bind(WebsenpaiController));

//Read request
router.get('/read', WebsenpaiController.readWebsenpai.bind(WebsenpaiController));

//update request
router.put('/update/:id', WebsenpaiController.updateWebsenpai.bind(WebsenpaiController));

//delete request
router.delete('/delete/:id', WebsenpaiController.deleteWebsenpai.bind(WebsenpaiController));

export default router;