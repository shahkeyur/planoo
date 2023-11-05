import { PropsWithChildren } from "react";

function FooterTitle({ children }: PropsWithChildren<any>) {
  return <h6 className="font-medium">{children}</h6>;
}

export default FooterTitle;