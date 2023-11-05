import Image from "next/image";
import Link from "next/link";

function PlanooLogo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo" width={160} height={160} />
    </Link>
  );
}

export default PlanooLogo;