const fs = require('fs');
const { Pool } = require('pg');

// Use an absolute path to the configuration file
const configPath = '/mnt/c/Users/Drilon/Desktop/devops-directive-docker-course-main/05-example-web-application/api-node/config.json';

if (!fs.existsSync(configPath)) {
  console.error(`Configuration file not found at path: ${configPath}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || config.databaseUrl,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const getDateTime = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW() as now;');
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    client.release();
  }
};

module.exports = { getDateTime };