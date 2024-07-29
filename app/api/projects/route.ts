// /app/api/projects/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db"; // Adjust the path to your Prisma client

export async function GET(req: NextRequest) {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    console.log("Received ID:", id); // Debugging line

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing project ID" },
        { status: 400 }
      );
    }

    const deletedProject = await prisma.project.delete({ where: { id } });
    console.log("Deleted Project:", deletedProject); // Debugging line
    return NextResponse.json(deletedProject);
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
