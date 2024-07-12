import React from "react";
import pool from "../../../backend/lib/db";
import Carousel from "../../components/Carousel";

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

let projectList = await fetchProjects();


export default function ProjectPage({ params }) {
  let ourProject;

  for (let project of projectList) {
    if (project.project_id == params.id) {
      ourProject = project;
    }
}
  console.log(params.id);
  return(
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-4 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">{ourProject.project_name}</h1>
        <p className="font-normal text-xl pb-8">{ourProject.description}</p>
      </div>
    </section>
  )
}