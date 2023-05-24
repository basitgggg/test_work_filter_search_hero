import Navbar from '@/components/views/Navbar'
import './globals.css'
import { Maven_Pro } from 'next/font/google'
import Wrapper from '@/components/shared/Wrapper'

const inter = Maven_Pro({ 
  subsets: ['latin'],
  weight:["400","500","600"]
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
