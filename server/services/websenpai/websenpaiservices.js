import { Websenpai, sequelize, Sequelize } from "../../database/models";
import globalValues from "../../utils/global_values";

const Op = Sequelize.Op;
const resJson = globalValues.result;
const errJson = globalValues.error;
class WebsenpaiService {
  async createWebsenpai(req) {
    let finalRes = {};
    try {
      let response = await Websenpai.create(req.body)
      finalRes[resJson] = response;
    } catch (error) {
      finalRes[errJson] = error.toString();
    }
    return finalRes;
  }

  async readWebsenpai(req) {
    let finalRes = {};
    try {
      let response = await Websenpai.findAll();
      finalRes[resJson] = response;
    } catch (error) {
      finalRes[errJson] = error.toString();
    }
    return finalRes;
  }

  async updateWebsenpai(req) {
    let finalRes = {};
    console.log(req.params.id);
    try {
      let websenpai =  await Websenpai.findByPk(req.params.id);
      websenpai.name = req.body.name || res.name;
      websenpai.age = req.body.age || res.age;

      await websenpai.save();
      finalRes[resJson] = websenpai;
    } catch (error) {
      finalRes[errJson] = error.toString();
    }
    return finalRes;
  }

  async deleteWebsenpai(req) {
    let finalRes = {};
    try {
      let response = await Websenpai.destroy({where : { senpai_id: req.params.id}})
      finalRes[resJson] = response;
    } catch (error) {
      finalRes[errJson] = error.toString();
    }
    return finalRes;
  }
}

export default new WebsenpaiService();
