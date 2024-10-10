import { Box } from '@mui/material'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '김도훈 기술 이력서',
  description: '김도훈의 기술 이력서 홈페이지',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ maxWidth: `1280px`, margin: `0 auto` }}>{children}</Box>
      </body>
    </html>
  )
}
