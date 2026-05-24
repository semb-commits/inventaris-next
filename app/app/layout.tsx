import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventaris App',
  description: 'Aplikasi manajemen inventaris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
