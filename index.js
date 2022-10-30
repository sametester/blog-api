// const express = require('express');
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');
// const postRoutes = require('./routes/posts');
import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/blog-api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(8800, () => {
  console.log('Connected! 8800');
});
