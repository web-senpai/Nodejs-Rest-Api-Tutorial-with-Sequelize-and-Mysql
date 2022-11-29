'use strict';
import { Model } from 'sequelize';

//Basemodel used in the project extending Model by Sequelize.
//This overrides the normal create and update functions to add extra functionality.
class BaseModel extends Model {
    
    async save()
    {
        let response = await super.save();

        return response;
    }

    static async create(parameters)
    {
        
        const createPromise = new Promise((resolve, reject) =>
        {

            super.create(parameters)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
        });

        return createPromise;
    }

    static async update(parameters)
    {   
        const createPromise = new Promise((resolve, reject) =>
        {

            super.update(parameters)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
        });

        return createPromise;
    }

    static async bulkCreate(parameters)
    {
      
        const createPromise = new Promise((resolve, reject) =>
        {

            super.bulkCreate(parameters)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
        });

        return createPromise;
    }
}

export default BaseModel;