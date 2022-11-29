import WebsenpaiService from "../../services/websenpai/websenpaiservices";
import {BaseController} from "../base_controller";

class WebsenpaiController extends BaseController{
    async createWebsenpai (req,res) {
        const status = await WebsenpaiService.createWebsenpai(req);
        super.parseResponse(status, req, res);
    }

    async readWebsenpai (req,res) {
        const status = await WebsenpaiService.readWebsenpai(req);
        super.parseResponse(status, req, res);
    }

    async updateWebsenpai (req,res) {
        const status = await WebsenpaiService.updateWebsenpai(req);
        super.parseResponse(status, req, res);
    }

    async deleteWebsenpai (req,res) {
        const status = await WebsenpaiService.deleteWebsenpai(req);
        super.parseResponse(status, req, res);
    }
}

export default new WebsenpaiController();