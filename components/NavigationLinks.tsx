"use client"

import Link from "next/link"
import { Button } from "./Button"
import { siteConfig } from "@/lib/data"

interface NavigationLinksProps {
  mobile?: boolean
  onClose?: () => void
}

export function NavigationLinks({ mobile = false, onClose }: NavigationLinksProps) {
  const baseLinkClass = mobile
    ? "py-3 px-2 text-gray-600 transition-colors hover:text-blue-600 hover:bg-gray-50 rounded-lg"
    : "text-gray-600 transition-colors hover:text-blue-600"

  const divider = mobile ? (
    <span className="h-px w-full bg-gray-200 my-2" />
  ) : (
    <span className="h-5 w-px bg-gray-200" />
  )

  const buttonProps = mobile
    ? { fullWidth: true, variant: "primary" as const }
    : { size: "sm" as const, variant: "primary" as const }

  return (
    <>
      <Link
        href="/#features"
        onClick={onClose}
        className={baseLinkClass}
      >
        Features
      </Link>
      <Link
        href="/#how-it-works"
        onClick={onClose}
        className={baseLinkClass}
      >
        How It Works
      </Link>
      <Link
        href="/pricing"
        onClick={onClose}
        className={baseLinkClass}
      >
        Pricing
      </Link>
      <Link
        href="/tutorials"
        onClick={onClose}
        className={baseLinkClass}
      >
        Tutorials
      </Link>
      <Link
        href="/faq"
        onClick={onClose}
        className={baseLinkClass}
      >
        FAQ
      </Link>
      {divider}
      <Link
        href={siteConfig.appUrl || "/#trial"}
        onClick={onClose}
        className={baseLinkClass}
      >
        Login
      </Link>
      <Button href="/#trial" onClick={onClose} {...buttonProps}>
        Start Free Trial
      </Button>
    </>
  )
}
