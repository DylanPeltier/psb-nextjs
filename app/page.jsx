import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar.jsx";

export default function Home() {
  return (
    <div className="flex w-auto h-[calc(100vh-200px)] flex-col items-center justify-center gap-10 p-4">
      <h1 className="w-3/5 text-center text-6xl font-bold text-slate-950 sm:text-4xl">
        Quality Sandblasting Service
      </h1>
      <p className="w-3/5 text-2xl text-center font-normal text-slate-950 sm:text-lg">
        Equipped with top-of-the-line technology and equipment, our quality
        sandblasting service is the only sandblasting service you will ever
        need.
      </p>
      <Button color="primary" size="lg" className="text-lg">
        Get In Touch
      </Button>
    </div>
  );
}
