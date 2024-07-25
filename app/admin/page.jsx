'use client';

import AdminProjectCard from "../components/AdminProjectCard";

export default function Admin() {

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-xl font-semibold">Upcoming Work</p>
        <div className="flex flex-row w-full h-fit gap-8 items-start justify-start">
          <AdminProjectCard />
          <AdminProjectCard />
          <AdminProjectCard />
        </div>
      </div>
    </div>
  );
}
