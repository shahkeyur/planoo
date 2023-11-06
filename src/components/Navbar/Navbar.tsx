"use client";

import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import PlannoLogo from "../PlannoLogo";

const links = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
];

function Nav() {
  const session = useSession();

  return (
    <Navbar className="shadow-md" maxWidth="full">
      <NavbarBrand>
        <PlannoLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {links.map((link) => (
          <NavbarItem className="hover:underline" key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {session.status === "unauthenticated" && (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link scroll={false} href="/login" prefetch>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                prefetch
                as={Link}
                scroll={false}
                color="primary"
                href="/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
        {session.status === "authenticated" && (
          <>
            <NavbarItem>
              <Button as={Link} color="primary" href="/app" variant="light">
                Go to app
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button color="primary" onClick={() => signOut()} variant="flat">
                Logout
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
