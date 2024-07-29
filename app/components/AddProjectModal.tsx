import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Input,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function AddProjectModal({
  isOpen,
  onOpenChange,
  onAddProject,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await onAddProject(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xl"
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
            <ModalBody className="flex flex-col gap-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Input
                  name="title"
                  type="text"
                  label="Title"
                  className="w-full text-base"
                  variant="bordered"
                  size="lg"
                />
                <Input
                  name="content"
                  type="text"
                  label="Description"
                  className="w-full text-base"
                  variant="bordered"
                  size="lg"
                />
                <RadioGroup label="Select project type" name="type">
                  <Radio value="residential">Residential</Radio>
                  <Radio value="commercial">Commercial</Radio>
                  <Radio value="automotive">Automotive</Radio>
                  <Radio value="fleet">Fleet</Radio>
                </RadioGroup>
                <RadioGroup label="Select project status" name="status">
                  <Radio value="planned">Planned</Radio>
                  <Radio value="done">Done</Radio>
                </RadioGroup>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Add Project
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
