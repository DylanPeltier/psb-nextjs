import { NextResponse } from 'next/server';
import pool from '../../../backend/lib/db';

export async function GET() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM projects');
    return NextResponse.json(res.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  } finally {
    client.release();
  }
}