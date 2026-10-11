"use client"

import { useState } from "react"
import { Icon } from "./Icon"
import { Logo } from "./Logo"
import { LinkButton } from "./LinkButton"
import { siteConfig } from "@/lib/data"

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 h-19 bg-white/94 border-b border-gray-200/80 backdrop-blur-[14px]">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)] h-full flex items-center justify-between">
        <Logo />
        <button
          className="hidden border-0 bg-transparent p-2 text-gray-900 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
        <nav
          className={`${
            open ? "open" : ""
          } hidden lg:flex items-center gap-7.25 text-sm font-semibold`}
          aria-label="Primary navigation"
        >
          <a
            href="/#features"
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            How It Works
          </a>
          <a
            href="/pricing"
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            Pricing
          </a>
          <a
            href="/tutorials"
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            Tutorials
          </a>
          <a
            href="/faq"
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            FAQ
          </a>
          <span className="h-5 w-px bg-gray-200 ml-0.5" />
          <a
            href={siteConfig.appUrl || "/#trial"}
            onClick={close}
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            Login
          </a>
          <LinkButton href="/#trial" onClick={close}>
            Start Free Trial
          </LinkButton>
        </nav>
        {/* Mobile menu */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-5 right-5 top-16.75 p-5 flex-col gap-1.5 bg-white border border-gray-200 rounded-xl shadow-[0_18px_40px_rgba(16,24,40,0.12)] lg:hidden`}
          aria-label="Primary navigation"
        >
          <a
            href="/#features"
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            How It Works
          </a>
          <a
            href="/pricing"
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            Pricing
          </a>
          <a
            href="/tutorials"
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            Tutorials
          </a>
          <a
            href="/faq"
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            FAQ
          </a>
          <span className="h-px w-full bg-gray-200 my-1.5" />
          <a
            href={siteConfig.appUrl || "/#trial"}
            onClick={close}
            className="py-2.5 px-1.5 text-gray-600 transition-colors hover:text-blue-600"
          >
            Login
          </a>
          <LinkButton href="/#trial" onClick={close} className="w-full">
            Start Free Trial
          </LinkButton>
        </nav>
      </div>
    </header>
  )
}
