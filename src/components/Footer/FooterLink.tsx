import { Link } from "@nextui-org/react";
import { PropsWithChildren } from "react";

function FooterLink({
  href,
  children,
}: PropsWithChildren<{
  href: string;
}>) {
  return (
    <Link
      className="text-gray-400 hover:text-gray-500 hover:underline"
      href={href}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
