import Link from "next/link";

// type for the query strings
type PetSearchQuery = {
  sortBy: string;
};

type Pet = {
  name: string;
  slug: string;
};

// we are telling it that pets is an array of objects that all conform to the "Pet" type
const pets: Pet[] = [
  { name: "Impala", slug: "impala" },
  { name: "Elephant", slug: "elephant" },
  { name: "Pangolin", slug: "pangolin" },
];

// function to compare the objects in the array to sort them
function comparePets(a: Pet, b: Pet) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function PetsPage({ searchParams }: { searchParams: PetSearchQuery }) {
  if (searchParams.sortBy === "asc") {
    pets.sort(comparePets);
  } else if (searchParams.sortBy === "desc") {
    pets.sort(comparePets).reverse();
  }

  return (
    <div>
      <h2>Pets</h2>

      <h3>Sort the pets</h3>
      <Link href="/pets">Remove Sort</Link>
      <br />
      <Link href="/pets?sortBy=asc">Sort by Ascending</Link>
      <br />
      <Link href="/pets?sortBy=desc">Sort by Descending</Link>
      <br />
      <br />
      <ul>
        {pets.map((pet) => {
          return (
            <li key={pet.slug}>
              <Link href={`/pets/${pet.slug}`}>{pet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
