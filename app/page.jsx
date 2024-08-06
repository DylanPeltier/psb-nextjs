"use client";

import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar.jsx";
import { Ship, House, Building2, Car, MoveRight } from "lucide-react";
import ReviewCard from "./components/ReviewCard.tsx";
import ServiceCard from "./components/ServiceCard.tsx";

export default function Home() {
  const firstReview = {
    author_name: "James Yott",
    text: "WOW! We had a 10 year old rusty trailer and Dan with his partner took it down to bare metal and brought it back to better than new.  Amazing work!",
    rating: 5,
  };

  const secondReview = {
    author_name: "Rebecca Colpitts",
    text: "I had an old Duncan Fife table that had coffee marks. I wanted to redo it. Dan was able to blast off the existing finish so I can preserve the table for my dining area. Great, efficient and fast service!",
    rating: 5,
  };

  const thirdReview = {
    author_name: "Andrew Leschied",
    text: "Dan is knowledgeable, quick to respond as well as completing the work at a fair price! I will be using him for all my sand blasting needs from here on!",
    rating: 5,
  };

  const Reviews = [firstReview, secondReview, thirdReview];

  const Services = [
    {
      text: "We can clean home exteriors, decks, patio furniture, swimming pools, concrete, docks and breakwalls.",
      name: "Residential",
      img_url:
        "https://utfs.io/f/8e35559f-8252-4138-bfa5-2cfa0ca8d1a5-nnrpl8.jpg",
    },
    {
      text: "We can remove paint, rust, body filler and powder coating to allow you to finish your project quicker and more efficient than sanding by hand.",
      name: "Automotive",
      img_url:
        "https://utfs.io/f/4fdf4e26-5717-4f50-85a4-a3416a7d6b62-39n1xz.jpg",
    },
    {
      text: "We can clean building exteriors from graffiti removal, line stripe removal and much more.",
      name: "Commercial",
      img_url:
        "https://utfs.io/f/5dceee71-5c9f-4ffa-a32e-9b78dda3974e-24jno.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full h-fit bg-slate-100">
      {/* Hero Section */}
      <div className="w-full h-[400px] bg-slate-100 px-60 py-16 flex flex-col items-start justify-center gap-10">
        <p className="text-6xl font-bold text-left w-[800px]">
          Revitalize surfaces with our eco-friendly dustless sandblasting
          service
        </p>
        <div className="flex flex-row items-start justify-center gap-6">
          <Button
            color="primary"
            size="lg"
            className="text-white font-medium text-xl rounded-xl px-8 py-2"
          >
            Let's talk
          </Button>
          <Button
            color="primary"
            variant="bordered"
            size="lg"
            className="text-primary-500 font-medium rounded-xl text-xl px-8 py-2"
          >
            Check out our work
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col w-full bg-slate-200 items-center pb-8">
        <p className="font-semibold text-2xl p-8">Reviews from our customers</p>
        {/* map over the reviews array and render each review as a ReviewCard component */}
        <div className="flex flex-row gap-[25px] w-fit">
          {Reviews.map((review) => (
            <ReviewCard key={review.author_name} review={review} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col w-full bg-slate-100 items-center pb-8">
        <p className="font-semibold text-2xl p-8">
          Range of services to suit your exact need
        </p>
        {/* map over the services array and render each service as a ServiceCard component */}
        <div className="flex flex-row gap-[25px] w-fit">
          {Services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
