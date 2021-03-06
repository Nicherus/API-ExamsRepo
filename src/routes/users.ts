import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { signInMiddleware, signUpMiddleware } from '../middlewares/usersMiddlewares';
import { signIn, signUp, signOut } from '../controllers/usersController';

const userRouter = Router();

userRouter.post('/sign-up', signUpMiddleware, signUp);
userRouter.post('/sign-in', signInMiddleware, signIn);
userRouter.delete('/sign-out', authMiddleware, signOut);

export default userRouter;