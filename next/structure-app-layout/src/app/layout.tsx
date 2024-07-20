export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <p>root layout is rendered</p>
        <div>{children}</div>
      </body>
    </html>
  );
}
