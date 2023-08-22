import { getCategories } from "@/lib/posts";
import Link from "next/link";

export default function CatorgiesPage() {
  const categories = getCategories();
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.catslug}>
              <Link href={`/blog/categories/${category.catslug}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
