"use server";

import prisma from "../../lib/db";

export async function addProject(formData: FormData) {
  await prisma.project.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      type: formData.get("type") as string,
      status: formData.get("status") as string,
    },
  });
}
