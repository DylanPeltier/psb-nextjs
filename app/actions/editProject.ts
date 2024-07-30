"use server";

import prisma from "../../lib/db"; // Adjust this import based on your project structure

export async function editProject(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;

  await prisma.project.update({
    where: { id: id },
    data: {
      title,
      content,
      type,
      status,
    },
  });
}
