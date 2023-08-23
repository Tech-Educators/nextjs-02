import Comment from "@/components/Comment";
import styles from "./page.module.css";
import { Suspense } from "react";
import Shimmer from "@/components/Shimmer";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Suspense and Streaming</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit dignissimos minus sint officia eum consectetur
        culpa debitis voluptatem reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit dignissimos minus sint officia eum consectetur
        culpa debitis voluptatem reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit dignissimos minus sint officia eum consectetur
        culpa debitis voluptatem reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit dignissimos minus sint officia eum consectetur
        culpa debitis voluptatem reiciendis.
      </p>

      <Suspense fallback={<Shimmer />}>
        <Comment />
      </Suspense>
    </main>
  );
}
