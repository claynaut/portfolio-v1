import React from "react";
import Link from "gatsby-link";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Navbar index="2"/>

        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.text}
        >
          <div className={styles.subtext}>
            <h1>
              Projects.
            </h1>
            <h2>Current</h2>
            <div className={styles.blurbWrapper}>
              <Blurb
                link="https://jspescasio.dev"
                title="jspescasio.dev"
                date="2021"
                caption="My personal website created using React, Gatsby, and Framer Motion." 
              />
              <Blurb
                link="https://biohackdemo.vercel.app"
                title="BioHack"
                date="2021"
                caption="The website used for an annual health hackathon at UCR. Made with the webdev committee." 
              />
            </div>
            <h2>Upcoming</h2>
            <div className={styles.blurbWrapper}>
              <Blurb
                title="planner app"
                date="2021"
                caption="A flexible productivity app to be made using React and Electron." 
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.anchor}
        >
          <div className={styles.subanchor}>
            <Link to="https://github.com/claynaut">
              <div>
                a showcase of some of my recent and upcoming work. See a more detailed overview on my Github.
              </div>
            </Link>
            <div> 
              some languages and technologies I'm currently working with:
            </div>
            <div className={styles.grid}>
              <div>C++</div>
              <div>CSS3</div>
              <div>Javascript</div>
              <div>HTML5</div>
              <div>React</div>
              <div>Gatsby</div>
              <div>Git</div>
              <div>npm</div>
              <div>Framer Motion</div>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2021 J.S. Pescasio
          </div>
        </motion.div>
      </div>
    </main>
  )
}