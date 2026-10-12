"use client"

import { useEffect, useState } from "react"
import { Logo } from "./Logo"

export function Footer() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-17.5 px-4 md:px-6 lg:px-8 text-gray-300 bg-[#0b1220]">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 lg:gap-16.25">
          <div className="footer-brand">
            <Logo />
            <p className="max-w-90 mt-4 text-[13px] text-gray-400">
              A clearer way to manage medicines, billing, stock, batches, and
              everyday pharmacy operations.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="my-1 text-white text-xs font-bold">Product</h3>
            <a
              href="/features"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="/#trial"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Free trial
            </a>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="my-1 text-white text-xs font-bold">Learn</h3>
            <a
              href="/tutorials"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Tutorials
            </a>
            <a
              href="/faq"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="/contact"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Support
            </a>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="my-1 text-white text-xs font-bold">Company</h3>
            <a
              href="/contact"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-14 pt-5.5 border-t border-gray-800 text-[10px] text-gray-500 gap-2">
          <span>© {year} Medicore Pharmacy.</span>
          <span>Built for modern medical stores in Pakistan.</span>
        </div>
      </div>
    </footer>
  )
}
