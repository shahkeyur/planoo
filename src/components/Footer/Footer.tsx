import { Button } from "@nextui-org/react";
import PlannoLogo from "../PlannoLogo";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer>
      <div className="text-center bg-orange-400 h-96 justify-center text-white flex flex-col gap-4">
        <h1 className="text-5xl">Download for Free!</h1>
        <p className="max-w-lg mx-auto">
          Revolutionize your task management. Achieve your goals, one task at a
          time. Grab your download and get started.
        </p>
        <div className="flex gap-2 justify-center">
          <Button className="rounded-full p-6 bg-white font-medium">
            App Store
          </Button>
          <Button className="rounded-full p-6 bg-white font-medium">
            Play Store
          </Button>
        </div>
      </div>
      <div className="px-4 py-8">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <PlannoLogo />
          </div>
          <div className="col-span-2 flex flex-col">
            <FooterTitle>Solutions</FooterTitle>
            <FooterLink href="#">AI Support</FooterLink>
            <FooterLink href="#">To-Do List</FooterLink>
            <FooterLink href="#">Simple Plan</FooterLink>
          </div>
          <div className="col-span-2 flex flex-col">
            <FooterTitle> Services</FooterTitle>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </div>
          <div className="col-span-2 flex flex-col">
            <FooterTitle> Policy</FooterTitle>
            <FooterLink href="/references">References</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
            <FooterLink href="#">Acceptable Use Policy</FooterLink>
          </div>
          <div className="col-span-3">
            <div className="float-right flex flex-col">
              <FooterTitle>Let&apos;s Talk</FooterTitle>
              <FooterLink href="mail:hello@planno.ai">
                hello@planno.ai
              </FooterLink>
              <FooterLink href="#">Block M Square, JKT</FooterLink>
              <FooterLink href="tel:+62812345678">(+62) 812 345 687</FooterLink>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />

        {/* Social and copyright section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button
              isIconOnly
              className="rounded-full bg-white outline-gray-200"
            >
              F
            </Button>
            <Button
              isIconOnly
              className="rounded-full bg-white outline-gray-200"
            >
              F
            </Button>
            <Button
              isIconOnly
              className="rounded-full bg-white outline-gray-200"
            >
              F
            </Button>
            <Button
              isIconOnly
              className="rounded-full bg-white outline-gray-200"
            >
              F
            </Button>
          </div>

          <p>Planno. All rights reserved. &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
