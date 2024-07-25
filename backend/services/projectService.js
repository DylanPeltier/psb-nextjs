import pool from "../../backend/lib/db";

export async function fetchProjects() {
  const client = await pool.connect();
  let projects = [];
  try {
    const res = await client.query('SELECT * FROM projects');
    projects = res.rows;
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
  return projects;
}