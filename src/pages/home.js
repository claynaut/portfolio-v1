import React from "react";
import Link from "gatsby-link";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Navbar index="1" open="false"/>
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.textWrapper}
        >
          <div className={styles.text}>
            <h1>Hello! I'm J.S.</h1>
            <p className={styles.caption}>
              aspiring software developer<br />
              based in Southern California
            </p>
            <p>
              I'm a third-year undergraduate studying CS at UC Riverside with a great interest in software and web development. Let's talk at <a href="mailto:js.b.pescasio@gmail.com" className={styles.link}> jpesc002@ucr.edu</a>!
            </p>
            <h2>Current Projects</h2>
            <p className={styles.subtitle}>
              Here are some projects that I'm currently working on.
              <Link to="/projects" className={styles.link}> Find more here.</Link>
            </p>
            <div className={styles.blurbWrapper}>
              <Blurb
                link="https://cutiehack2021.vercel.app/"
                title="CutieHack Website"
                date="2021"
                caption="Developing the frontend and backend of the website for Cutie Hack 2021 @ UCR." 
              />
              <Blurb
                link="https://jspescasio.dev"
                title="jspescasio.dev"
                date="2021"
                caption="My personal website built with React, Gatsby, and Framer Motion." 
              />
              <Blurb
                title="DiamondHacks Website"
                date="2021"
                caption="Developing the frontend and backend of the website for DiamondHacks 2021-2022 @ UCR." 
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
          <div className={styles.profile}></div>
          <div className={styles.panelProfile}>
            <div className={styles.buttonWrapper}>    
              <a href="https://bit.ly/resume-jsdev-july2021" target="_blank" rel="noreferrer">
                <div>resume &rarr;</div>
              </a>
              <a href="https://github.com/claynaut" target="_blank" rel="noreferrer">
                <div>github &rarr;</div>
              </a>
              <a href="https://www.linkedin.com/in/jspescasio" target="_blank" rel="noreferrer">
                <div>linkedin &rarr;</div>
              </a>
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