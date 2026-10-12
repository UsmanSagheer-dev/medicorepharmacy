"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 h-20 bg-white/95 border-b border-gray-200/80 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)] h-full flex items-center justify-between px-5">
        <Logo />
        <div className="flex items-center gap-2 lg:hidden">
          <WhatsAppButton />
          <button
            className="flex border-0 bg-transparent p-2 text-gray-900"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
        <nav
          className={`${
            open ? "open" : ""
          } hidden lg:flex items-center gap-8 text-sm font-semibold`}
          aria-label="Primary navigation"
        >
          <NavigationLinks onClose={close} />
          <WhatsAppButton />
        </nav>
        {/* Mobile menu */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-5 right-5 top-20 p-6 flex-col gap-2 bg-white border border-gray-200 rounded-xl shadow-2xl lg:hidden`}
          aria-label="Primary navigation"
        >
          <NavigationLinks mobile onClose={close} />
        </nav>
      </div>
    </header>
  );
}
