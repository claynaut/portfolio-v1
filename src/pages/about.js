import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Navbar index="3" open="false"/>
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.textWrapper}
        >
          <div className={styles.text}>
            <h1>
              About Me.
            </h1>
            <p className={styles.subtitle}>
              I'm J.S. Pescasio, a second-year undergraduate studying CS at UC Riverside. I spend my free time trying and learning new things, especially with anything related to software and web development.
            </p>
            <h2>
              Current Goals
            </h2>
            <p className={styles.subtitle}>
              These are some goals that I plan to work on this year.
            </p>
            <div className={styles.blurbGrid}>
              <Blurb
                title="Start Developing an App Using React"
                caption="Diving deeper into software development." 
              />
              <Blurb
                title="Design Another Website Theme"
                caption="Having fun with web development." 
              />
              <Blurb
                title="Learning Guitar"
                caption="Trying out new things." 
              />
              <Blurb
                title="Learning Piano"
                caption="Getting back to an old aspiration." 
              />
              <Blurb
                title="Build a PC"
                caption="Hoping GPUs are back in stock before the year ends." 
              />
            </div>
          </div>
        </motion.div>
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.panelWrapper}
        >
          <div className={styles.panel}>
            <div className={styles.buttonWrapper}>
              <a href="https://claynaut.carrd.co" target="_blank" rel="noreferrer">
                <div> 
                  also known as claynaut &rarr;
                </div>
              </a>
              <div> 
                other things I'm interested in:
              </div>
              <div className={styles.buttonGrid}>
                <div>Storytelling</div>
                <div>Art</div>
                <div>Korean R&B</div>
                <div>Japanese rock</div>
                <div>Indie video games</div>
                <div>Reading</div>
                <div>Swords</div>
                <div>Graphic design</div>
              </div>
            </div>
            <div className={styles.copyright}>
              © 2021 J.S. Pescasio
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}