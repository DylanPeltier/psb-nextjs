import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { projectName, description, startDate, endDate, status, type } = data;
    const newProject = await prisma.project.create({
      data: {
        projectName,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status,
        type,
      },
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}
