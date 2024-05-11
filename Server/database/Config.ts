import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();

// Objeto CONFIG: contiene la configuración necesaria para establecer la conexión a la base de datos
  const {BD_HOSTNAME, BD_USERNAME, BD_PASSWORD, BD_NAME} = process.env;

const config = {
   host:  BD_HOSTNAME,
    user: BD_USERNAME,
    password: BD_PASSWORD,
    database: BD_NAME   
};



export const connection = mysql.createPool(config);

