import React, { Component } from "react";
import Link from "gatsby-link";
import { motion } from "framer-motion";
import { BiLandscape } from "@react-icons/all-files/bi/BiLandscape";
import { BiLayer } from "@react-icons/all-files/bi/BiLayer";
import { BiIdCard } from "@react-icons/all-files/bi/BiIdCard";
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt";

import styles from "../styles/navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.partition}>
          <motion.div 
            whileHover={{ width: 200 }} 
            className={(this.props.index == 1 ? `${styles.active}` : `` )}
          >
            <Link to="/" className={styles.navlink}>
              <p className={styles.link}><BiLandscape /></p>
              <p className={styles.linkName}>home.</p>
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ width: 200 }} 
            className={(this.props.index == 2 ? `${styles.active}` : `` )}
          >
            <Link to="/projects" className={styles.navlink}>
              <p className={styles.link}><BiLayer /></p>
              <p className={styles.linkName}>projects.</p>
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ width: 200 }} 
            className={(this.props.index == 3 ? `${styles.active}` : `` )}
          >
            <Link to="/about" className={styles.navlink}>
              <p className={styles.link}><BiIdCard /></p>
              <p className={styles.linkName}>about.</p>
            </Link>
          </motion.div>
        </div>
        <div className={styles.partition}>
          <motion.div whileHover={{ width: 200 }}>
            <Link to="https://github.com/claynaut/jspescasio.dev" className={styles.navlink}>
              <p className={styles.link}><BiCodeAlt /></p>
              <p className={styles.linkName}>source code.</p>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
}