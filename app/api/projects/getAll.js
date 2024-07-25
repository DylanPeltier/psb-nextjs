import { NextResponse } from 'next/server';
import pool from '../../../backend/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM projects');
    client.release();

    return NextResponse.json(res.rows, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}
