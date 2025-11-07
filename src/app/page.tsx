import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Animated scooters with trails */}
      <div className={styles.scooterContainer}>
        <div className={`${styles.scooterWrapper} ${styles.scooter1}`}>
          <div className={styles.scooterTrail}></div>
          <div className={styles.scooter}>🛴</div>
          <div className={styles.speedLines}>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
          </div>
        </div>
        <div className={`${styles.scooterWrapper} ${styles.scooter2}`}>
          <div className={styles.scooterTrail}></div>
          <div className={styles.scooter}>🛴</div>
          <div className={styles.speedLines}>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
          </div>
        </div>
        <div className={`${styles.scooterWrapper} ${styles.scooter3}`}>
          <div className={styles.scooterTrail}></div>
          <div className={styles.scooter}>🛴</div>
          <div className={styles.speedLines}>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
          </div>
        </div>
        <div className={`${styles.scooterWrapper} ${styles.scooter4}`}>
          <div className={styles.scooterTrail}></div>
          <div className={styles.scooter}>🛴</div>
          <div className={styles.speedLines}>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
            <div className={styles.speedLine}></div>
          </div>
        </div>
      </div>

      {/* Animated road with dashes */}
      <div className={styles.road}>
        <div className={styles.roadLane}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.roadDash}></div>
          ))}
        </div>
        <div className={styles.roadLane}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.roadDash}></div>
          ))}
        </div>
      </div>

      {/* Lightning bolts */}
      <div className={styles.lightningContainer}>
        <div className={`${styles.lightning} ${styles.lightning1}`}>⚡</div>
        <div className={`${styles.lightning} ${styles.lightning2}`}>⚡</div>
        <div className={`${styles.lightning} ${styles.lightning3}`}>⚡</div>
      </div>

      <div className={styles.content}>
        <div className={styles.logoSection}>
          <div className={styles.iconRing}>
            <div className={styles.iconRingInner}>
              <span className={styles.mainIcon}>⚡</span>
            </div>
          </div>
        </div>
        
        <h1 className={styles.title}>
          <span className={styles.brandName}>M&rsquo;LiteEv</span>
          <span className={styles.subtitle}>is under development</span>
        </h1>
        
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerIcon}>🛴</div>
          <div className={styles.dividerLine}></div>
        </div>
        
        <p className={styles.description}>
          Revolutionizing electric mobility with cutting-edge technology.
          <br />
          <span className={styles.highlight}>Ride into the future with us!</span>
        </p>
        
        <div className={styles.statusBadge}>
          <div className={styles.statusDot}></div>
          <span>Launching Soon</span>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <span>Electric</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌱</span>
            <span>Eco-Friendly</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🚀</span>
            <span>Fast</span>
          </div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className={styles.orbs}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
      </div>
    </main>
  );
}
