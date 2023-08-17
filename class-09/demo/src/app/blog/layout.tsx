export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>THIS IS THE LIST OF CATEGORIES DISPLAYED AT ALL TIMES: HUMASNS/ANIMALS</h1>
      {children}
    </div>
  );
}
