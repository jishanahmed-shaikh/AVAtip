import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AVAtip - Turn Every Like Into AVAX',
  description: 'AVAtip rewards every social action with instant crypto micropayments on Avalanche',
  keywords: 'avalanche, defi, social, micropayments, crypto, dapp, blockchain, web3',
  authors: [{ name: 'AVAtip Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-deep-black text-cyber-white antialiased">
        {children}
      </body>
    </html>
  )
}