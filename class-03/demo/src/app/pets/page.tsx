import Link from "next/link";

export default function PetsPage() {
  return (
    <div>
      <h2>Pets Page</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor fugit repudiandae soluta quaerat
        cupiditate?
      </p>
      <Link href="/pets/elephant">Elephant</Link>
    </div>
  );
}
