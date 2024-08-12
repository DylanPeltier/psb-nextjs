"use server";

import prisma from "../../lib/db";

export async function addProject(formData: FormData) {
  // Extract form fields
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;

  // Extract pictures URLs
  const pictures: string[] = [];
  for (let i = 0; ; i++) {
    const pictureUrl = formData.get(`pictures[${i}]`);
    if (pictureUrl === null) break;
    pictures.push(pictureUrl as string);
  }

  // Create project in database
  await prisma.project.create({
    data: {
      title,
      content,
      type,
      status,
      pictures, // Include pictures URLs
    },
  });
}
