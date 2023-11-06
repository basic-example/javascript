export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div>root layout</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
