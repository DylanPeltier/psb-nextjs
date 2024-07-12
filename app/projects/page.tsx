import { ProjectCard } from "../components/ProjectCard";
import pool from "../../backend/lib/db";

const fetchProjects = async () => {
  const client = await pool.connect();
  let projects = [];
  try {
    const res = await client.query('SELECT * FROM projects');
    projects = res.rows;
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
  return projects;
};

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
      <h1 className="w-auto text-left text-4xl font-semibold text-slate-950 pb-3">Our Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.project_name}
              projectDescription={project.description}
              projectDate={project.end_date.toISOString().substring(0, 10)}
              projectImage={project.project_image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}