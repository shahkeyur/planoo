import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
