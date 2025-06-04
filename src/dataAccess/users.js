import { Mongo } from "../database/mongo.js";
import { ObjectId } from 'mongodb';
import crypto from 'crypto';
import { error } from "console";

const collectionName = 'users'

export default class UsersDataAccess {

    async getUsers() {
        const result = await Mongo.db
        .collection(collectionName)
        .find()
        .toArray()

        return result;
    }

    async deleteUser(userId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete(
            { _id: new ObjectId(userId)}
        );
      
        return result;
    }

    async updateUser(userId, userData) {
        if(userData.password){
            const salt = crypto.randomBytes(16).toString('hex');
                crypto.pbkdf2(userData.password, salt, 310000, 16, 'sha256', async (error, hashedPassword) => {
                    if(error){        
                        throw new Error('Error during hashing password');
                    }
                    userData = {...userData, password: hashedPassword, salt }
                    const result = await Mongo.db
                    .collection(collectionName)
                    .insertOne({
                        email: req.body.email,
                        password: hashedPassword,
                        salt
                    });
        });

        }else{
            const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {$set: userData});
            return result;
        }
    }
}