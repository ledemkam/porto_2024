import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'eric kamdem',
  description: 'A passionate Full Stack Entwickler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  )
}
