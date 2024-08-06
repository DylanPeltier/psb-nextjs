"use client";

import Image from "next/image";

interface Service {
  text: string;
  name: string;
  img_url: string;
  img_alt: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { text, name, img_url, img_alt } = service;

  return (
    <div className="flex flex-col items-start justify-start w-[320px] h-[420px] bg-slate-200 rounded-xl">
      <Image
        src={img_url}
        alt={img_alt}
        width={320}
        height={155}
        className="w-full h-[200px] rounded-t-xl pb-[25px]"
      ></Image>
      <p className="text-lg font-semibold px-8 pb-2">{name}</p>
      <p className="text-base font-normal px-8">{text}</p>
    </div>
  );
}
