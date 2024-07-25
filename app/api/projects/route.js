import { NextResponse } from 'next/server';
import pool from '../../../backend/lib/db';

export async function POST(request) {
  try {
    const { project_name, description, start_date, end_date, status, type } = await request.json();

    const client = await pool.connect();
    const res = await client.query(
      `INSERT INTO projects (project_name, description, start_date, end_date, status, type)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [project_name, description, start_date, end_date, status, type]
    );
    client.release();

    return NextResponse.json(res.rows[0], { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}
