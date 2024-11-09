// src/server/routes/index.ts
import express from 'express';
import authRoutes from './authRoutes';
import gameRoutes from './gameRoutes';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('landing', { authenticated: false }); // Unauthenticated landing
});

router.use('/auth', authRoutes);
router.use('/game', gameRoutes);

export default router;