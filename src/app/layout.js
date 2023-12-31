import 'material-icons/iconfont/outlined.css';
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/common/navbar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:flex lg:gap-x-4 site-nav-wrapper lg:justify-end">
          <nav className='site-nav bg-white px-5 py-2 md:py-0 lg:py-3 lg:min-h-screen'>
            <NavBar />
          </nav>
          <main className='site-content lg:grow bg-white'>
            {children}
          </main>
        </div>

        <div className=''>

        </div>
      </body>
    </html>
  )
}
