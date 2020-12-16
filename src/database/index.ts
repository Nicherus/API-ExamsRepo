import { Pool } from 'pg';


const connection = new Pool({ 
	connectionString: process.env.DATABASE_URL, 
	ssl: {rejectUnauthorized: false}
});

export default connection;