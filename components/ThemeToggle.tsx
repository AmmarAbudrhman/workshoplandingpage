"use client"

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm" />
    )
  }

  function toggleMode() {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground active:scale-95"
      title={`Current: ${theme}. Click to cycle.`}
    >
      {theme === 'light' && <Sun size={18} />}
      {theme === 'dark' && <Moon size={18} />}
      {(theme === 'system' || !theme) && <Monitor size={18} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
