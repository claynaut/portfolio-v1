import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Navbar index="3"/>
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
                title="Develop an App Using Electron"
                caption="Diving deeper into software development." 
              />
              <Blurb
                title="Design Another Website Theme"
                caption="Getting a better handle of React." 
              />
              <Blurb
                title="Finish a Full Illustration"
                caption="Experimenting with art styles." 
              />
              <Blurb
                title="Walk 10K Steps a Day for a Month"
                caption="Aspiring to be more consistent." 
              />
              <Blurb
                title="Make Some Music"
                caption="Trying something completely different." 
              />
              <Blurb
                title="Develop a Game"
                caption="Expanding my horizons." 
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
              <div> 
                also known as claynaut.
              </div>
              <div> 
                other things I'm interested in:
              </div>
              <div className={styles.buttonGrid}>
                <div>Storytelling</div>
                <div>Art</div>
                <div>Korean R&B</div>
                <div>Japanese Rock</div>
                <div>Indie Video Games</div>
                <div>Reading</div>
                <div>Swords</div>
                <div>Casual Biking</div>
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