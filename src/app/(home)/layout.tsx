import type { Metadata } from 'next'
import './globals.css'
import StartLoading from '../../component/loading/StartLoading'
import Header from '@/component/common/header/Header'

export const metadata: Metadata = {
  title: '정해준 포트폴리오',
  description: '정해준의 포트폴리오',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko-kr">
      <body className={`bg-bg-100 antialiased`}>
        <StartLoading />
        <Header />
        {children}
      </body>
    </html>
  )
}
