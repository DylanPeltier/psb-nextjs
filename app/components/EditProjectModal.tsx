// components/EditProjectModal.tsx
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { editProject } from "../actions/editProject"; // Import the server action

interface Project {
  id: string;
  title: string;
  content: string;
  type: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface EditProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
  onProjectEdited: () => void; // Callback to refresh the project list
}

export default function EditProjectModal({
  isOpen,
  onOpenChange,
  project,
  onProjectEdited,
}: EditProjectModalProps) {
  const [editedProject, setEditedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (project) {
      setEditedProject({ ...project });
    }
  }, [project]);

  const handleInputChange = (field: keyof Project, value: string) => {
    if (editedProject) {
      setEditedProject({ ...editedProject, [field]: value });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (editedProject) {
      const formData = new FormData();
      formData.append("id", editedProject.id);
      formData.append("title", editedProject.title);
      formData.append("content", editedProject.content);
      formData.append("type", editedProject.type);
      formData.append("status", editedProject.status);

      try {
        await editProject(formData);
        onProjectEdited(); // Refresh the project list
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Error editing project:", error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  if (!editedProject) return null;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xl"
      radius="md"
      shadow="lg"
      placement="center"
      backdrop="opaque"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Edit Project
            </ModalHeader>
            <ModalBody>
              <Input
                label="Title"
                value={editedProject.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
              <Input
                label="Content"
                value={editedProject.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
              />
              <Select
                label="Type"
                selectedKeys={[editedProject.type]}
                onChange={(e) => handleInputChange("type", e.target.value)}
              >
                <SelectItem key="residential" value="residential">
                  Residential
                </SelectItem>
                <SelectItem key="commercial" value="commercial">
                  Commercial
                </SelectItem>
                <SelectItem key="fleet" value="fleet">
                  Fleet
                </SelectItem>
                <SelectItem key="automotive" value="automotive">
                  Automotive
                </SelectItem>
                {/* Add more types as needed */}
              </Select>
              <Select
                label="Status"
                selectedKeys={[editedProject.status]}
                onChange={(e) => handleInputChange("status", e.target.value)}
              >
                <SelectItem key="planned" value="planned">
                  Planned
                </SelectItem>
                <SelectItem key="done" value="done">
                  Done
                </SelectItem>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save Changes
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
