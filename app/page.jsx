"use client";

import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar.jsx";
import { Ship, House, Building2, Car, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-auto h-fit flex-col items-center justify-start gap-10 px-4 bg-slate-100">
      <div className="w-11/12 mb-2 sm:w-screen md:w-screen bg-gradient-to-t from-blue-900 to-blue-500 gap-14 sm:gap-10 md:gap-10 h-6/8 sm:h-[355px] md:h-[355px] rounded-b-3xl sm:rounded-b-none md:rounded-b-none flex flex-col items-start sm:items-center md:items-center justify-center px-40 sm:px-5 md:px-5 py-20 sm:py-10 md:py-10">
        <h1 className="sm:w-[350px] md:w-[350px] lg:w-full w-[790px] text-6xl font-medium text-gray-50 sm:text-3xl md:text-3xl lg:text-3xl text-left sm:text-center md:text-center lg:text-center  leading-tight">
          Revitalize surfaces with our eco-friendly dustless sandblasting
        </h1>
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col gap-10 sm:gap-5 md:gap-5 lg:gap-5">
          <Button
            color="primary"
            size="lg"
            variant="solid"
            className="w-[390px] h-[75px] sm:w-[270px] sm:h-[50px]"
          >
            <p className="text-[2em] px-8 font-medium sm:text-[1.5em]">
              Get in touch today
            </p>
          </Button>

          <Button
            color="primary"
            size="lg"
            variant="bordered"
            onPress={() => (window.location.href = "/projects")}
            className="w-[390px] h-[75px] border-3 sm:w-[270px] sm:h-[50px]"
          >
            <p className="text-[2em] px-8 font-normal text-slate-50 sm:text-[1.5em]">
              Check out our work
            </p>
          </Button>
        </div>
      </div>

      <div className="w-11/12 flex flex-col items-start lg:items-center justify-start">
        <p className="text-4xl lg:text-3xl">Popular Services</p>
      </div>

      <div className="flex flex-row lg:flex-col gap-10 items-center justify-start w-11/12 mb-6">
        <div className="flex flex-col gap-2 items-start justify-start lg:items-center lg:justify-center">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl flex flex-col items-center justify-center">
            <House className="text-white" size={100} stroke-width={1} />
          </div>
          <p className="text-2xl lg:text-center">Residential</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start lg:items-center lg:justify-center">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl flex flex-col items-center justify-center">
            <Building2 className="text-white" size={100} stroke-width={1} />
          </div>
          <p className="text-2xl lg:text-center">Commercial</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start lg:items-center lg:justify-center">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl flex flex-col items-center justify-center">
            <Car className="text-white" size={100} stroke-width={1} />
          </div>
          <p className="text-2xl lg:text-center">Automotive</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start lg:items-center lg:justify-center">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl flex flex-col items-center justify-center">
            <Ship className="text-white" size={100} stroke-width={1} />
          </div>
          <p className="text-2xl lg:text-center">Fleets</p>
        </div>
      </div>

      <div className="w-11/12 flex flex-col items-start lg:items-center justify-start">
        <p className="text-4xl lg:text-3xl">Owner's Testimonial</p>
      </div>

      <div className="flex items-start justify-start w-11/12 lg:w-full mb-14">
        <p className="text-2xl lg:text-center">
          "After years of seeing what a restored car or an old piece of
          equipment can look like I thought it would be nice to try and be part
          of that restoration so I have opened a business that cleans and
          removes rust, dirt, grim and graffiti to start the restoration
          process. We service from Chatham-Kent to Essex and all surrounding
          areas.”
        </p>
      </div>
    </div>
  );
}
