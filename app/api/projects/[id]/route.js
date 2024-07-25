import { NextResponse } from 'next/server';
import pool from '../../../../backend/lib/db';

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM projects WHERE project_id = $1', [id]);
    client.release();

    if (res.rows.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(res.rows[0], { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error fetching project' }, { status: 500 });
  }
}
