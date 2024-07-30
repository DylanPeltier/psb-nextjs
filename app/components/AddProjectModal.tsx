import React from "react";
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
import { addProject } from "../actions/addProject"; // Adjust the import path as necessary

interface AddProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onAddProject: (formData: FormData) => Promise<void>; // Callback to refresh the project list
}

export default function AddProjectModal({
  isOpen,
  onOpenChange,
  onAddProject,
}: AddProjectModalProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await onAddProject(formData); // Refresh the project list
      onOpenChange(false); // Close the modal
    } catch (error) {
      console.error("Error adding project:", error);
      // Handle error (e.g., show error message to user)
    }
  };

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
              Add New Project
            </ModalHeader>
            <ModalBody className="flex flex-col gap-3">
              <Input
                name="title"
                type="text"
                label="Title"
                className="w-full"
                size="lg"
              />
              <Input
                name="content"
                type="text"
                label="Description"
                className="w-full"
                size="lg"
              />
              <Select
                name="type"
                label="Select project type"
                className="w-full"
                size="lg"
              >
                <SelectItem key="residential" value="residential">
                  Residential
                </SelectItem>
                <SelectItem key="commercial" value="commercial">
                  Commercial
                </SelectItem>
                <SelectItem key="automotive" value="automotive">
                  Automotive
                </SelectItem>
                <SelectItem key="fleet" value="fleet">
                  Fleet
                </SelectItem>
              </Select>
              <Select
                name="status"
                size="lg"
                label="Select project status"
                className="w-full"
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
              <Button type="submit" color="primary">
                Add Project
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
