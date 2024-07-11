import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
      <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">Our Projects</h1>
        <div className="flex w-auto h-auto flex-col md:flex-row items-left justify-start gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}