const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();
//Init Middleware

app.use(express.json());

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assets in production
if (process.env.NODE_DEV === 'production') {
  //set statis folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
