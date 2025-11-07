import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Animated scooters */}
      <div className={styles.scooterContainer}>
        <div className={`${styles.scooter} ${styles.scooter1}`}>
          🛴
        </div>
        <div className={`${styles.scooter} ${styles.scooter2}`}>
          🛴
        </div>
        <div className={`${styles.scooter} ${styles.scooter3}`}>
          🛴
        </div>
      </div>

      {/* Road lines */}
      <div className={styles.roadLines}>
        <div className={styles.roadLine}></div>
        <div className={styles.roadLine}></div>
        <div className={styles.roadLine}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <span className={styles.mainIcon}>⚡</span>
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleGradient}>mliteev</span> is under development
        </h1>
        <p className={styles.description}>
          We&rsquo;re building something exciting for electric mobility enthusiasts.
          <br />
          <span className={styles.highlight}>Ride into the future with us!</span>
        </p>
        <div className={styles.comingSoon}>
          <span className={styles.pulse}>●</span> Coming Soon
        </div>
      </div>
    </main>
  );
}
