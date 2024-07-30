import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar.jsx";

export default function Home() {
  return (
    <div className="flex w-auto h-[calc(100vh-65px)] flex-col items-center justify-start gap-6 px-4 bg-slate-100">
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
            className="w-[390px] h-[75px] border-3 sm:w-[270px] sm:h-[50px]"
          >
            <p className="text-[2em] px-8 font-normal text-slate-50 sm:text-[1.5em]">
              Check out our work
            </p>
          </Button>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-start justify-start">
        <p className="text-4xl">Popular Services</p>
      </div>
      <div className="flex flex-row gap-10 items-center justify-start w-11/12">
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl"></div>
          <p className="text-2xl">Residential</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl"></div>
          <p className="text-2xl">Commercial</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl"></div>
          <p className="text-2xl">Automotive</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-t from-blue-900 to-blue-500 w-[260px] h-[155px] rounded-2xl"></div>
          <p className="text-2xl">Fleets</p>
        </div>
      </div>
    </div>
  );
}
