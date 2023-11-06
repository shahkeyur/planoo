"use client";

import { Modal, ModalContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";

export default function ModalLayout({ children }: PropsWithChildren<any>) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      size="5xl"
      style={{
        height: "90%",
      }}
      onClose={() => {
        setIsOpen(false);
        setTimeout(() => {
          router.back();
        }, 250);
      }}
    >
      <ModalContent className="max-h-90">{children}</ModalContent>
    </Modal>
  );
}
