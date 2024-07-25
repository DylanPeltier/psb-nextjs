import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

client.connect();

export async function fetchProjectsFromDB() {
  const res = await client.query('SELECT * FROM projects');
  return res.rows;
}

export async function deleteProjectFromDB(id) {
  await client.query('DELETE FROM projects WHERE project_id = $1', [id]);
}