import React from "react";

export const metadata = {
  title: "🎂",
  description: "A special surprise",
};

export default function HbdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto">{children}</div>
  );
}
