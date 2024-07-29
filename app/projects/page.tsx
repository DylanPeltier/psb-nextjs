import { ProjectCard } from "../components/ProjectCard";
import prisma from "../../lib/db";

export default async function Projects() {
  const projects = await prisma.project.findMany();

  return (
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950 pb-3">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard
                projectId={project.id}
                key={index}
                projectName={project.title}
                projectDescription={project.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
