import { createSessionm, getUserIdByToken} from '../repositories/SessionsRepository';
// import UsersRepository from '../repositories/UsersRepository';

async function authMiddleware(req, res, next) {

	const auth = req.header('authorization');
	if (!auth) return res.status(401).send({ error: 'Auth header not found' });

	const token = auth.split(' ')[1];
	if (!token) return res.status(401).send({ error: 'token header not found' });

	const sessionUserId = await getUserIdByToken(token);
	if (!sessionUserId) return res.status(401).send({ error: 'Invalid token' });

	const user = await getUserIdByToken(sessionUserId);
	if (!user) return res.status(401).json({ error: 'Invalid token' });

	req.user = user;
	req.token = token;
	req.userId = sessionUserId;
	next();
}

module.exports = authMiddleware;
