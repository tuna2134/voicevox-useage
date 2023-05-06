import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./_components/_headers"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'voiceage',
  description: 'voicevox useage example.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
