'use client'

import React from "react";
import { Card, CardHeader, Button, Image } from "@nextui-org/react";

export function ProjectCard({ projectName, projectDescription, projectDate, projectImage, projectId }) {
  return (
    <Card className="p-4 w-fit max-w-[450px] h-full max-h-[300px] flex flex-col items-center justify-center">
      <CardHeader className="flex flex-col items-start">
        <h4 className="font-semibold text-large text-left pb-1">{projectName}</h4>
        <p className="w-full text-default-500 text-left text-sm pb-4">{projectDescription}</p>
        <p className="pb-4 w-full text-left text-default-500 text-sm">{projectDate}</p>
        <Button color="primary" size="sm">
          View Details
        </Button>
      </CardHeader>
    </Card>
  );
}
