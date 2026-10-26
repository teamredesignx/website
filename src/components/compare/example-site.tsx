import styles from "./example-site.module.css";

/** A fictional plumbing site, shown the way it looked before. Decorative, so hidden from assistive tech. */
export function BeforeSite() {
  return (
    <div className={styles.old} aria-hidden="true">
      <div className={styles.chrome} style={{ fontFamily: "Arial, sans-serif" }}>
        <i />
        <i />
        <i />
        <span>www.harbour-plumbing-services.example/index2.htm</span>
      </div>
      <div className={styles.mock}>
        <div className={styles.marquee}>
          *** WELCOME TO HARBOUR PLUMBING SERVICES *** CALL TODAY *** BEST PRICES ***
        </div>
        <nav className={styles.nav}>
          {["Home", "About Us", "Our Services", "Gallery", "Links", "Guestbook", "FAQ", "Sitemap", "Contact"].map(
            (item, i, all) => (
              <span key={item}>
                <a>{item}</a>
                {i < all.length - 1 ? " | " : ""}
              </span>
            ),
          )}
        </nav>
        <div className={styles.cols}>
          <div className={styles.box}>
            <div className={styles.ph}>[ image ]</div>
            <p>
              <b>News</b>
            </p>
            <p>Site updated 2014. Please sign our guestbook!</p>
          </div>
          <div className={styles.box}>
            <h4>Welcome to our website</h4>
            <p>
              Harbour Plumbing Services has been providing quality plumbing services to the local community since
              1998. We are a family owned business that offers a wide range of services including blocked drains,
              hot water, gas fitting, roofing and general maintenance.
            </p>
            <p>
              Please browse our website and contact us for further information about our services and products.
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.ph}>[ image ]</div>
            <p>
              <b>Links</b>
            </p>
            <p>Partners, suppliers, other sites</p>
          </div>
        </div>
        <div className={styles.counter}>You are visitor number 000412</div>
      </div>
    </div>
  );
}

/** The same business after a redesign: one promise, one action. */
export function AfterSite() {
  return (
    <div className={styles.fresh} aria-hidden="true">
      <div className={styles.chrome}>
        <i />
        <i />
        <i />
        <span>harbourplumbing.example</span>
      </div>
      <div className={styles.bar}>
        <div className={`${styles.brand} t-bold`}>Harbour</div>
        <div className={styles.links}>
          <span className={styles.linkText}>Services</span>
          <span className={styles.linkText}>Pricing</span>
          <span className={styles.pill}>Call now</span>
        </div>
      </div>
      <div className={styles.promise}>
        <h3 className="t-bold">Burst pipe? A plumber is at your door in 60 minutes.</h3>
        <p>Fixed prices, licensed plumbers, open every hour of every day.</p>
        <span className={`${styles.pill} ${styles.pillLarge}`}>Call now</span>
      </div>
      <div className={styles.facts}>
        <span>Open 24/7</span>
        <span>Fixed prices</span>
        <span>Licensed</span>
      </div>
    </div>
  );
}
