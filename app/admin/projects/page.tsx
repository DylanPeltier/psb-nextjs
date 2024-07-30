"use client";

import React, { useState, useEffect } from "react";
import ProjectTable from "../../components/ProjectTable";
import {
  Input,
  Button,
  Divider,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import AddProjectModal from "../../components/AddProjectModal"; // Import the AddProjectModal component
import { addProject } from "../../actions/addProject"; // Import the server action
import EditProjectModal from "../../components/EditProjectModal"; // Import the EditProjectModal component

interface Project {
  id: string;
  title: string;
  content: string;
  type: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function AdminProjects() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false); // State for Add Project Modal
  const [showEditProjectModal, setShowEditProjectModal] = useState(false); // State for Edit Project Modal
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);

  const isEditButtonDisabled = !selectedKey;
  const isDeleteButtonDisabled = !selectedKey;

  const openEditModal = () => {
    if (selectedKey) {
      const projectToEdit = projects.find((p) => p.id === selectedKey);
      if (projectToEdit) {
        setProjectToEdit(projectToEdit);
        setShowEditProjectModal(true);
      }
    }
  };

  // Function to fetch projects
  const fetchProjects = async (): Promise<void> => {
    try {
      const response = await fetch("/api/projects");
      if (response.ok) {
        const data: Project[] = await response.json();
        setProjects(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects on component mount
  }, []);

  const handleAddProject = async (formData) => {
    try {
      await addProject(formData);
      setShowAddProjectModal(false); // Close the modal on successful submission
      await fetchProjects(); // Refresh the projects list
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDelete = async () => {
    if (projectToDelete) {
      try {
        const response = await fetch(`/api/projects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: projectToDelete }),
        });

        if (!response.ok) {
          throw new Error("Failed to delete project");
        }

        // Refresh the projects list
        await fetchProjects();
        setShowModal(false);
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const openModalForDeletion = () => {
    if (selectedKey) {
      setProjectToDelete(selectedKey); // Set the selected project for deletion
      setShowModal(true); // Show the modal
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10 sm:p-0">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-2xl font-semibold mb-2">All Projects</p>
        <div className="flex lg:flex-row items-start justify-between w-full h-fit sm:flex-col sm:gap-2 sm:mb-1">
          <Input
            placeholder="Search Projects..."
            className="w-40 flex-none mb-2"
          />
          <div className="flex flex-row items-center justify-between gap-2 h-full">
            <Button
              color="primary"
              className="font-semibold"
              onClick={() => setShowAddProjectModal(true)} // Show Add Project Modal
            >
              Add Project
            </Button>
            <Divider orientation="vertical" className="mx-2" />
            <Button
              color="primary"
              className="font-semibold"
              isDisabled={isEditButtonDisabled}
              onPress={openEditModal}
            >
              Edit Project
            </Button>
            <Button
              color="danger"
              className="font-semibold"
              isDisabled={isDeleteButtonDisabled}
              onClick={openModalForDeletion}
            >
              Delete Project
            </Button>
          </div>
        </div>
        <div className="flex flex-row w-full h-fit gap-8 items-start justify-start">
          <ProjectTable
            projects={projects}
            onSelectionChange={(key) => setSelectedKey(key as string)}
            selectedKey={selectedKey}
          />
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={showAddProjectModal}
        onOpenChange={setShowAddProjectModal}
        onAddProject={handleAddProject} // Pass the handleAddProject function
      />

      <EditProjectModal
        isOpen={showEditProjectModal}
        onOpenChange={setShowEditProjectModal}
        project={projectToEdit}
        onProjectEdited={fetchProjects}
      />

      {/* Confirmation Modal */}
      <Modal
        isOpen={showModal}
        onOpenChange={(isOpen) => setShowModal(isOpen)}
        size="md"
        radius="md"
        shadow="lg"
        backdrop="opaque"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this project?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    handleDelete();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
