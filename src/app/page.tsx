import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>mliteev is under development</h1>
        <p>
          We&rsquo;re building something exciting for electric mobility enthusiasts.
          Check back soon for updates.
        </p>
      </div>
    </main>
  );
}
