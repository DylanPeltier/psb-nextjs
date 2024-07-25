import { NextResponse } from 'next/server';
import pool from '../../../../backend/lib/db';

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const { project_name, description, start_date, end_date, status, type } = await request.json();

    const client = await pool.connect();
    const res = await client.query(
      `UPDATE projects
       SET project_name = $1, description = $2, start_date = $3, end_date = $4, status = $5, type = $6
       WHERE project_id = $7 RETURNING *`,
      [project_name, description, start_date, end_date, status, type, id]
    );
    client.release();

    if (res.rows.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(res.rows[0], { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 });
  }
}
