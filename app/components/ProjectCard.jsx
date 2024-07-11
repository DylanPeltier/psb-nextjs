import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export function ProjectCard() {
  return (
    <Card className="p-4 w-fit flex flex-col items-center justify-center" isPressable>
      <CardHeader className="flex flex-col items-start">
        <h4 className="font-semibold text-large ">Project Name</h4>
        <p className="w-full text-default-500 text-left text-sm">Project description</p>
        <p className="pb-4 w-full text-left text-default-500 text-sm">Project date</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  )
}