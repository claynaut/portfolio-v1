import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/navbar.js";
import Blurb from "../components/blurb.js";

import styles from "../styles/default.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
      <Navbar index="2" open="false"/>
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 250 }}
          transition={{ ease: "easeOut", duration: 1 }} 
          className={styles.textWrapper}
        >
          <div className={styles.text}>
            <h1>
              Projects.
            </h1>
            <h2>Current</h2>
            <p className={styles.subtitle}>
              These are some projects that I'm currently working on.
            </p>
            <div className={styles.blurbWrapper}>
              <Blurb
                link="https://jspescasio.dev"
                title="jspescasio.dev"
                date="2021"
                caption="My personal website built with React, Gatsby, and Framer Motion." 
              />
              <Blurb
                title="DiamondHacks Website"
                date="2021-2022"
                caption="Currently the webdev lead for DiamondHacks, an upcoming hackathon at UCR. Will be developing the frontend and backend." 
              />
            </div>
            <h2>Previous</h2>
            <p className={styles.subtitle}>
              These are some projects that I previously worked on.  
            </p>
            <div className={styles.blurbWrapper}>
              <Blurb
                link="https://dota-2-analyzer-frontend.vercel.app/"
                title="Dota 2 Analyzer"
                date="2021"
                caption="A course project for an Intro to Software Engineering course at UCR. Developed the frontend for the web application." 
              />
              <Blurb
                link="https://biohack2021-jsdev.vercel.app/"
                title="BioHack Website"
                date="2021"
                caption="The website for an annual health-themed hackathon at UCR. Developed the frontend with the webdev committee." 
              />
            </div>
            <h2>Upcoming</h2>
            <p className={styles.subtitle}>
              These are some projects that I plan to work on in the future.  
            </p>
            <div className={styles.blurbWrapper}>
              <Blurb
                title="CitrusHack Website"
                date="2022"
                caption="Recently became a webdev lead for CitrusHack, an annual hackathon at UCR. Will be developing the frontend for the website." 
              />
              <Blurb
                title="planner app"
                date="2022"
                caption="A flexible productivity app to be built with React and NextJS." 
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
              <a href="https://github.com/claynaut" target="_blank" rel="noreferrer">
                <div>
                  a showcase of some of my recent and upcoming work. see a more detailed overview on my Github.
                </div>
              </a>
              <div> 
                some languages and technologies I'm currently working with:
              </div>
              <div className={styles.buttonGrid}>
                <div>C++</div>
                <div>CSS3</div>
                <div>Javascript</div>
                <div>HTML5</div>
                <div>React</div>
                <div>Gatsby</div>
                <div>Git</div>
                <div>NextJS</div>
                <div>Framer Motion</div>
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