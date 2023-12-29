import { Work_Sans } from 'next/font/google'
import './globals.css'
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Nav } from '@/components/navbar/navbar';


const work = Work_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});


export const metadata = {
  title: 'One Jamat',
  description: 'bla bla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={work.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
