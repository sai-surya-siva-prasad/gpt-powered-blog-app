import {Open_Sans} from "next/font/google"
import './globals.css'
import NavBar from "app/(shared)/NavBar";
import { Inter } from 'next/font/google';
import Footer from "app/(shared)/Footer";
import Trending from "./(home)/Trending";
const openSans=Open_Sans({
  subsets: ["latin"],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Chatgpt App',
  description: 'Blog built in nexts that uses ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className}lang="en">
      <body >
        <NavBar/>
 
        <Footer/>
        {children}
       </body>
    </html>
  )
}
