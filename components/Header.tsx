"use client"

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { LayoutDashboard } from 'lucide-react'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-bg px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-6 gap-y-2 py-3 sm:py-4">
        <Link
          href="/"
          onClick={(e) => {
            // If we are already on the home page, just smooth scroll up
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <LayoutDashboard size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            نور
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex md:gap-2">
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            عن المنصة
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            المميزات
          </button>
          <button
            onClick={() => scrollToSection('stats')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            الإحصائيات
          </button>
          <button
            onClick={() => scrollToSection('centers')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            المراكز
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            رحلتنا
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            الفريق
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="nav-link px-2 py-2 text-xs font-medium cursor-pointer"
          >
            النظام
          </button>
        </div>

        <div className="mr-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
