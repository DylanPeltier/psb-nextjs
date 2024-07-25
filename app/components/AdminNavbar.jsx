'use client';

import React from 'react';
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Input } from "@nextui-org/react";
import { Search } from 'lucide-react';

export default function AdminNavbar({ children }) {
  return (
    <div className="w-full h-fit text-white flex items-center px-6 py-5 border-b-1 border-slate-300 gap-4 bg-slate-50">
      <div className="flex items-center space-x-4">
        {children}
      </div>
      <div className="flex-1 ml-4 mr-4">
        <Input
          className="w-full h-full caret-slate-950"
          placeholder="Search..."
          startContent={<Search size={18} strokeWidth={1} color="#020617" />}
        />
      </div>
      <div className="flex space-x-4 mr-9">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
