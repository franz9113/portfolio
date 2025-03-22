import type React from 'react';
// Container component for consistent layout
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={`px-4 sm:px-6 md:px-8 mx-auto max-w-7xl ${className || ''}`}
    >
      {children}
    </div>
  );
}
