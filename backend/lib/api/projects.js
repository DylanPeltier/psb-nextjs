import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchProjects() {
  return await prisma.project.findMany();
}

export async function deleteProject(id) {
  return await prisma.project.delete({
    where: { project_id: id },
  });
}
