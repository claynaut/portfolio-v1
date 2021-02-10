import React from "react";

import styles from "../styles/default.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h1>404.</h1>
            <p className={styles.caption}>
              Page not found. The page that you're looking for does not exist.
            </p>
          </div>
        </div>
        <div className={styles.panelWrapper}>
          <div className={styles.panel}>
            <div className={styles.buttonWrapper}>    
              <a href="https://jspescasio.dev" target="_blank" rel="noreferrer">
                <div>return to homepage.</div>
              </a>
            </div>
            <div className={styles.copyright}>
              © 2021 J.S. Pescasio
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}