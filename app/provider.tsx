'use client'

import { ThemeProvider } from 'next-themes'
import { themes } from '@/styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme='system' value={{ ...themes }}>{children}</ThemeProvider>
}