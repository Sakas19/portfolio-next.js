"use client"
import './globals.css'
import Navbar from './ components/navbar/page'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
        <navbar />
        </ThemeProvider>
        {children}
        </body>
    </html>
  )
}
