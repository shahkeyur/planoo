import React, { useState, useEffect } from "react";

interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  showTitle?: boolean;
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  showTitle = false,
  open,
  children,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const alertClasses = `p-4 ${isClosing ? "fade-out" : "fade-in-out"} ${
    type === "info"
      ? "bg-blue-600 text-white rounded-md"
      : type === "success"
      ? "bg-green-600 text-white rounded-md"
      : type === "warning"
      ? "bg-yellow-600 text-white rounded-md"
      : type === "error"
      ? "bg-red-600 text-white rounded-md"
      : ""
  }`;

  useEffect(() => {
    if (!open) {
      // When 'open' becomes false, trigger the fade-out animation and call the 'onClose' callback
      setIsClosing(true);

      // Adjust the timeout duration to match the fade-out animation duration
      setTimeout(() => {
        setIsClosing(false);
        if (onClose) onClose();
      }, 300);
    }
  }, [open, onClose]);

  return (
    <div className={open ? alertClasses : "hidden"} role="alert">
      {showTitle && <p className="font-bold">{title}</p>}
      {children}
    </div>
  );
};

export default Alert;
