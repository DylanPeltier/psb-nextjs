"use client";

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const types = ["Residential", "Commercial", "Automotive", "Fleet"];
const statuses = ["Planned", "Done"];

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: {
    title: string;
    content: string;
    type: string;
    status: string;
  }) => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
  onAddProject,
}: AddProjectModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState(types[0]);
  const [status, setStatus] = useState(statuses[0]);

  const handleSubmit = async () => {
    const project = { title, content, type, status };
    try {
      // POST request to your API to create the project
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      onAddProject(project); // Notify parent component of the new project
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="md"
      radius="md"
      shadow="lg"
      backdrop="opaque"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Project
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-3">
                <Input
                  label="Title"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  label="Content"
                  placeholder="Enter project content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Dropdown>
                  <Button>{type}</Button>
                  <DropdownMenu
                    aria-label="Select project type"
                    onAction={(key) => setType(key as string)}
                  >
                    {types.map((t) => (
                      <DropdownItem key={t}>{t}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <Button>{status}</Button>
                  <DropdownMenu
                    aria-label="Select project status"
                    onAction={(key) => setStatus(key as string)}
                  >
                    {statuses.map((s) => (
                      <DropdownItem key={s}>{s}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleSubmit}>
                Add Project
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
