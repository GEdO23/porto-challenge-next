import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto Seguro - Challenge',
  description: 'Desafio da Porto Seguro desenvolvido por OMCORP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-screen h-screen`}>
        <Cabecalho/>
        {children}
      </body>
    </html>
  )
}
