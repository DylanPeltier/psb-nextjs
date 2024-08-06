import ServiceCard from "../components/ServiceCard";
import { Card, CardBody } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

export default function Services() {
  return (
    <section className="flex flex-col w-screen h-[calc(100vh-69x)] items-center justify-start py-20 gap-20">
      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">
          Our Services
        </h1>
        <div className="flex w-auto h-auto flex-col md:flex-row items-left justify-center gap-8">
          {/* <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard /> */}
        </div>
      </div>

      <Divider className="w-4/5" />

      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">
          About Us
        </h1>
        <p className="font-normal text-xl">
          At Precision Sand Blasting, we specialize in providing top-notch
          sandblasting services to meet all your surface preparation needs. With
          years of experience in the industry, our skilled team is dedicated to
          delivering exceptional results for both residential and commercial
          projects. We pride ourselves on using the latest equipment and
          techniques to ensure the highest quality and customer satisfaction.
          Trust us to restore and revitalize your surfaces with precision and
          care.
        </p>
      </div>

      <Divider className="w-4/5" />

      <div className="w-4/5 h-auto flex flex-col items-left justify-center gap-8 p-4">
        <h1 className="w-auto text-left text-4xl font-semibold text-slate-950">
          Message From The Owner
        </h1>
        <p className="font-normal text-xl">
          After years of seeing what a restored car or an old piece of equipment
          can look like I thought it would be nice to try and be part of that
          restoration so I have opened a business that cleans and removes rust,
          dirt, grim and graffiti to start the restoration process. We service
          from Chatham-Kent to Essex and all surrounding areas.
        </p>
      </div>
    </section>
  );
}
