import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Portfolio | ABC Web Development',
  description: 'Showcasing my work and skills as a professional developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
          <div className="container">
            <nav className="flex justify-between items-center py-4">
              <a href="/" className="text-2xl font-bold text-primary">Portfolio</a>
              <div className="flex space-x-6">
                <a href="#about" className="hover:text-primary">About</a>
                <a href="#projects" className="hover:text-primary">Projects</a>
                <a href="#contact" className="hover:text-primary">Contact</a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-slate-100 dark:bg-slate-800 py-8">
          <div className="container text-center">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}