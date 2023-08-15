// we are defining a type for PetPageParam, as an object with a property of "pet" that is a string
type PetPageParam = {
  pet: string;
};

export default function PetPage({ params }: { params: PetPageParam }) {
  console.log(params);
  return <p>This is the individual pet page for {params.pet}</p>;
}
