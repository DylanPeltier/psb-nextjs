import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET({ params }: { params: { id: string } }) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(params.id) },
    });
    if (project) {
      return NextResponse.json(project);
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching project' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const { projectName, description, startDate, endDate, status, type } = data;
    const updatedProject = await prisma.project.update({
      where: { id: Number(params.id) },
      data: {
        projectName,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status,
        type,
      },
    });
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 });
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    await prisma.project.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 });
  }
}
