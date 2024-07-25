import { NextResponse } from 'next/server';
import pool from '../../../../backend/lib/db';

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const client = await pool.connect();
    const res = await client.query('DELETE FROM projects WHERE project_id = $1 RETURNING *', [id]);
    client.release();

    if (res.rows.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(res.rows[0], { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 });
  }
}
