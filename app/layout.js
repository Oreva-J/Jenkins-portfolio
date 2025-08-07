import './globals.css'

export const metadata = {
  title: 'Soboss Portfolio',
  description: 'Steve Soboss - Fullstack Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/a-icon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 minimum-scale=1"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  )
}
