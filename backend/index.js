import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) console.error('Error al conectar con la BD:', err);
  else console.log('Conectado a la base de datos');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Tasky funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
