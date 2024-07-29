import React from "react";
import Carousel from "../../components/Carousel";
import prisma from "../../../lib/db";

export default async function ProjectPage({ params }) {
  const projectList = await prisma.project.findMany();
  const project = projectList.find((project) => project.id == params.id);

  console.log(params.id);

  if (!project) {
    return (
      <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
        <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-4 p-4">
          <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">
            Project Not Found
          </h1>
          <p className="font-normal text-xl pb-8">
            The project you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-4 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">
          {project.title}
        </h1>
        <p className="font-normal text-xl pb-8">{project.content}</p>
      </div>
    </section>
  );
}
