import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"
import HeaderComponent from '@/components/header'

import localFont from 'next/font/local'

const poppins = Poppins(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
  })

const recoleta = localFont({
  src: '../../public/fonts/Recoleta/Recoleta.otf',
  display: 'swap',
  variable: '--font-recoleta'
})

export const metadata: Metadata = {
  title: 'Angela Pereira - Pro Beauty',
  authors: [{ name: 'Joao Gabriel', url: 'https://www.instagram.com/_jjooaogab/' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${recoleta.variable}`}>
        <main>
          <div className="flex flex-col">
            <HeaderComponent />
            {children}
          </div>
          <Toaster />
        </main>
      </body>
    </html>
  )
}
