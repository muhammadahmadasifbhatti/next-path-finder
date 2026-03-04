import React from "react";

export const metadata = {
  title: "Happy Birthday Aiman! 🎂",
  description: "A special birthday surprise for Aiman",
};

export default function BirthdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto">{children}</div>
  );
}
