"use client";

import { useState } from "react";
import Header from "./_components/Header";
import { contents } from "./_data/contents";
import FirstPage from "./_components/FirstPage";
import Link from "next/link";
import PageComponent from "./_components/PageComponent";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-col items-center px-3">
      <Header handleSidebar={handleSidebar} />
      <FirstPage />
    </div>
  );
}
