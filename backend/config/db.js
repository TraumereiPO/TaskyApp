import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db =
mysql.createConnection({
    host: Process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.BD_NAME
});

db.connect(err => {
    if (err){
        console.error('Error al conectar con la base de datos:', err);
    } else{
        console,log('conexión a la base de datos establecida');
    }
});

export default db;

// Este archivo se encarga solo de conectar con MySQL usando los 
// datos del .env

