"use client";

import AdminProjectCard from "../components/AdminProjectCard";
import React, { useState } from "react";

export default function Admin() {
  const [underConstruction, setUnderConstruction] = useState(false);

  if (underConstruction) {
    return (
      <div className="w-full h-[calc(100%-81px)] flex flex-col items-center justify-center gap-10 p-4 sm:p-0 sm:gap-0">
        Page Under Construction
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10 sm:p-0 sm:gap-10">
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
