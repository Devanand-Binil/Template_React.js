// src/components/ui/Card.tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={`space-y-2 ${className || ""}`}>{children}</div>;
};
