const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const thoughtRoutes = require('./routes/thought-routes');
require('dotenv').config();
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
