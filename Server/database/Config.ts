import { createPool } from 'mysql2/promise';

// Objeto CONFIG: contiene la configuración necesaria para establecer la conexión a la base de datos
const CONFIG = {
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: 'rjRNWEIJuntlwIoMszhmYYqDkBYAyTsv',
    database: 'railway',
    port: 56278
};

export const connection = createPool(CONFIG);


