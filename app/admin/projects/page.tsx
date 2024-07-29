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

export default function AdminProjects() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [projects, setProjects] = useState<any[]>([]);

  const isEditButtonDisabled = selectedKeys.size !== 1;
  const isDeleteButtonDisabled = selectedKeys.size === 0;

  // Function to fetch projects
  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      if (response.ok) {
        const data = await response.json();
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
    if (selectedKeys.size === 1) {
      setProjectToDelete([...selectedKeys][0]); // Set the selected project for deletion
      setShowModal(true); // Show the modal
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-2xl font-semibold mb-2">All Projects</p>
        <div className="flex lg:flex-row items-start justify-between w-full h-fit sm:flex-col sm:gap-2 sm:mb-1">
          <Input
            placeholder="Search Projects..."
            className="w-40 flex-none mb-2"
          />
          <div className="flex flex-row items-center justify-between gap-2 h-full">
            <Button color="primary" className="font-semibold">
              Add Project
            </Button>
            <Divider orientation="vertical" className="mx-2" />
            <Button
              color="primary"
              className="font-semibold"
              isDisabled={selectedKeys.size !== 1}
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
            onSelectionChange={setSelectedKeys}
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showModal}
        onOpenChange={(isOpen) => setShowModal(isOpen)}
        size="md"
        radius="md"
        shadow="lg"
        backdrop="opaque"
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
                  color="primary"
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
