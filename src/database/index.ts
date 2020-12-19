import { Pool } from 'pg';
import 'dotenv/config';


const connection = new Pool({ 
	connectionString: process.env.DATABASE_URL, 
	ssl: {rejectUnauthorized: false}
});

export default connection;