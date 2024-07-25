import { NextResponse } from 'next/server';
import pool from '../../../backend/lib/db';

// GET all projects
export async function GET(request) {
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

// GET project by id
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

// POST new project
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

// UDATE project
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

// DELETE project
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

