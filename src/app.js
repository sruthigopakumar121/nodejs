import express from 'express';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

export default app;