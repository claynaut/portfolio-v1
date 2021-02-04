import React from "react";
import Link from "gatsby-link";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Default() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>

        <Navbar index="1"/>

        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.text}
        >
          <div className={styles.subtext}>
            <h1>Hello! I'm J.S.</h1>
            <p className={styles.caption}>
              artist and developer<br />
              based in Southern California
            </p>
            <p>
              I'm a second-year undergraduate studying CS at UC Riverside with a great interest in software and web development. Let's talk at <a href="mailto:js.b.pescasio@gmail.com" className={styles.link}> jpesc002@ucr.edu</a>!
            </p>
            <h2>Current Projects</h2>
            <p className={styles.subtitle}>
              Here are some projects I'm currently working on.
              <Link to="/projects" className={styles.link}> Find more here.</Link>
            </p>
            <div className={styles.blurbWrapper}>
              <Blurb
                link="https://jspescasio.dev/"
                title="jspescasio.dev"
                date="2021"
                caption="My personal website created using React, Gatsby, and Framer Motion." 
              />
              <Blurb
                link="https://biohackdemo.vercel.app/"
                title="BioHack"
                date="2021"
                caption="The website used for an annual health hackathon at UCR. Made with the webdev committee." 
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
            <Link to="https://bit.ly/resume-jspescasio">
              <div>resume</div>
            </Link>
            <Link to="https://github.com/claynaut">
              <div>github</div>
            </Link>
            <Link to="https://www.linkedin.com/in/jspescasio">
              <div>linkedin</div>
            </Link>
          </div>
          <div className={styles.copyright}>
            © 2021 J.S. Pescasio
          </div>
        </motion.div>
      </div>
    </main>
  )
}