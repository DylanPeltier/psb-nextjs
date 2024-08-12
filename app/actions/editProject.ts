"use server";

import prisma from "../../lib/db"; // Adjust this import based on your project structure

export async function editProject(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;

  // Collect all image URLs from formData
  const pictures: string[] = [];
  for (let i = 0; ; i++) {
    const pictureUrl = formData.get(`pictures[${i}]`);
    if (pictureUrl === null) break;
    if (typeof pictureUrl === "string") {
      pictures.push(pictureUrl);
    }
  }

  await prisma.project.update({
    where: { id: id },
    data: {
      title,
      content,
      type,
      status,
      pictures, // Update the pictures field
    },
  });
}
