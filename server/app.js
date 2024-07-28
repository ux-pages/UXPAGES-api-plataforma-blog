require('dotenv').config();  // Carregar o dotenv no início
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const sequelize = require('./config/database');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


app.use(cors({
  origin: 'http://127.0.0.1:5500', // ou o domínio do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Permite o cabeçalho Authorization
}));




app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
