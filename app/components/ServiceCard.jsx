import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ServiceCard() {
  return (
    <Card className="py-4 w-fit">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-semibold text-large ">Residential</h4>
        <p className="pb-4 w-full text-default-500 text-sm">We can clean home exteriors, decks, patio furniture, swimming pools, concrete, docks and breakwalls.</p>
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