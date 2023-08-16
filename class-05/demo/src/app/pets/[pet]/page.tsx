import { Metadata } from "next";

// we are defining a type for PetPageParam, as an object with a property of "pet" that is a string
type PetPageParam = {
  pet: string;
};

// export const metadata: Metadata = {
//   title: "Individual pet",
//   description: "very single only one, not a tuple",
// };

export function generateMetadata({ params }: { params: PetPageParam }) {
  return {
    title: `Tim's Pet Emporium - ${params.pet}`,
    description: "This was created with the generateMetaData function",
  };
}

export default function PetPage({ params }: { params: PetPageParam }) {
  console.log(params);
  return <p>This is the individual pet page for {params.pet}</p>;
}
