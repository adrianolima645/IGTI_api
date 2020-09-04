import mongoose from 'mongoose';
import studentModel from './studentModel.js';

const db = {};
db.mongoose = mongoose;
db.student = studentModel(mongoose);
db.url = process.env.MONGODB;
//('mongodb+srv://bootcamp:bootcamp@cluster0.t3chi.gcp.mongodb.net/grades?retryWrites=true&w=majority');

export { db };
