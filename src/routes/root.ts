import { Request, Response, NextFunction, Router } from "express";
const router: Router = Router({ caseSensitive: true });

router.get('/', (req: Request, res: Response) => {
    res.render('home');
});

export default router;