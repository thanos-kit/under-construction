import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thanos Kit | Under Construction',
  description: 'Mock server, server templates, and UI kits everything you need to build fast and win faster. ⚡',
  generator: 'Thanos Kit SaaS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
