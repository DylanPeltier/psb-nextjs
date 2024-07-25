'use client';

import React from 'react';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Input } from "@nextui-org/react";
import { Search } from 'lucide-react';

export default function AdminNavbar() {
  return (
    <div className="w-full h-fit text-white flex items-center px-6 py-5 border-b-1 border-slate-300 gap-8">
      <div className="flex-1">
        <div>
          <Input className="w-full h-full caret-slate-950" placeholder="Search..." startContent={<Search size={18} strokeWidth={1} color="#020617" />} />
        </div>
      </div>
      <div className="flex space-x-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}