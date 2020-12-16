import { Router } from 'express';
import { mockMiddleware } from 'src/middlewares/mockMiddleware';
import { signIn, signUp, signOut } from '../controllers/usersController';

const userRouter = Router();

userRouter.post('/sign-up', mockMiddleware, signUp);

userRouter.post('/sign-in', mockMiddleware, signIn);

userRouter.post('/logout', mockMiddleware, signOut);

export default userRouter;