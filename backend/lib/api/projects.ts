// Function to fetch all projects
export const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  const projects = await response.json();
  return projects;
};

// Function to create a new project
export const createProject = async (projectData) => {
  const response = await fetch('/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  const newProject = await response.json();
  return newProject;
};

// Function to fetch a single project by ID
export const fetchProjectById = async (id) => {
  const response = await fetch(`/api/projects/${id}`);
  const project = await response.json();
  return project;
};

// Function to update a project by ID
export const updateProject = async (id, projectData) => {
  const response = await fetch(`/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  const updatedProject = await response.json();
  return updatedProject;
};

// Function to delete a project by ID
export const deleteProject = async (id) => {
  const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return true;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};
