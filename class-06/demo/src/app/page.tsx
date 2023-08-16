import styles from "./page.module.css";

export default function Home() {
  const styles2 = {
    div: {
      color: "lime",
      fontSize: "5rem",
    },
  };

  return (
    <main style={styles2.div}>
      <p className={styles["first-p"]}>Hello world</p>
      <p>Hello New York!</p>
    </main>
  );
}
