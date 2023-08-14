export default function PetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-8 border-white">
      <p>I am a layout wrapping everything under the /pets route.</p>
      {children}
    </div>
  );
}
