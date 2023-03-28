import { NextFunction, Request, Response, Router } from 'express';
const statusRoute = Router();

statusRoute.use('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: `bar` });
});

export default statusRoute;
