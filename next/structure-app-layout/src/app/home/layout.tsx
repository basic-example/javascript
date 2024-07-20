export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>home layout is rendered</p>
      <div>{children}</div>
    </div>
  );
}
