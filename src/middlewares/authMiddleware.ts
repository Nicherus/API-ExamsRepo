import { getUserIdByToken} from '../repositories/SessionsRepository';

const authMiddleware = async (req, res, next): Promise<any> => {

	const auth = req.header('authorization');
	if (!auth) return res.status(401).send({ error: 'Auth header not found' });

	const token = auth.split(' ')[1];
	if (!token) return res.status(401).send({ error: 'token header not found' });

	const sessionUserId = await getUserIdByToken(token);
	if (!sessionUserId) return res.status(401).send({ error: 'Invalid token' });

	req.token = token;
	req.userId = sessionUserId;
	next();
};

export default authMiddleware;