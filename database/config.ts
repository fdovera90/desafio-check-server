import mongoose from 'mongoose';

export const dbConnection = async() => {

    try {
        const db = await mongoose.connect(process.env.DB_CONNECTION || '');
        console.log(`La base de datos está conectada a ${ db.connection.db.databaseName }`);
    } catch (error) {
        console.log(error);
        console.log('Error al iniciar la base de datos');
    }
}