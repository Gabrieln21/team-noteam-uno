// src/server/routes/gameRoutes.ts
import express from 'express';

const router = express.Router();

const requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    if (req.session.user) {
        next(); // User is logged in, proceed to the route
    } else {
        res.redirect('/auth/login'); // Redirect to login if not
    }

     */
};

router.get('/lobby', requireAuth, (req, res) => {
    res.render('gameLobby');
});

router.get('/play/:gameId', requireAuth, (req, res) => {
    // ... (fetch game data using req.params.gameId)
    //res.render('gamePage', { gameData: ... });
});

export default router;