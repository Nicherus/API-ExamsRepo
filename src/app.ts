import express from 'express';
import routes from './routes';
import cors from 'cors';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
	console.log(`Server is listening on port.${port}`);
});