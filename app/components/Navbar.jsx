"use client";

import React, { useState, useEffect, use } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { AdminButton } from "./AdminButton.jsx";
import { useClerk } from "@clerk/clerk-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "Projects", "Admin"];

  const { user } = useClerk();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.publicMetadata && user.publicMetadata.role === "admin") {
      console.log("User is admin");
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden sm:block"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">PSB</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>{isAdmin && <AdminButton btnSize={"sm"} />}</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignedOut>
            <SignInButton className="bg-primary-500 rounded-xl px-4 py-2 text-white font-semibold text-small" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <Link color="foreground" href="/" size="lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services" size="lg">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects" size="lg">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          {isAdmin && (
            <Link color="danger" href="/admin" size="lg">
              Admin
            </Link>
          )}
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
