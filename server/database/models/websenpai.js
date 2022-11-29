'use strict';
import BaseModel from './base_model';
import { model , Sequelize} from '../../config/model_config';

const DataTypes = Sequelize.DataTypes;

class Websenpai extends BaseModel {

  static associate(models) {

  }

  static init(sequelize, DataTypes) {
    return super.init({
      senpai_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING },
      age: { type: DataTypes.INTEGER },
      bio: { type: DataTypes.TEXT },
      birthday: {type: DataTypes.DATE}

    }, {
      sequelize,
      modelName: 'Websenpai',
      tableName: 'websenpais',
    });
  }
};

export default Websenpai.init(model , DataTypes);