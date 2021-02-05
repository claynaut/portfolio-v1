import React, { Component } from "react";
import Link from "gatsby-link";
import { motion } from "framer-motion";
import { BiLandscape } from "@react-icons/all-files/bi/BiLandscape";
import { BiLayer } from "@react-icons/all-files/bi/BiLayer";
import { BiIdCard } from "@react-icons/all-files/bi/BiIdCard";
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";

import styles from "../styles/navbar.module.css";

export default class Navbar extends Component {
  state = {
    open : false
  }

  Toggle = () => {
    this.setState ({
      open : !this.state.open
    })
  }

  render() {
    return (
      <div className={(this.state.open ? `${styles.nav} ${styles.navOpen}` : `${styles.nav}`)}>
        <div className={styles.partition}>
          <Link to="/">
            <motion.div 
              whileHover={{ width: 200 }} 
              className={(this.props.index === "1" ? `${styles.active}` : `` )}
            >
              <p className={styles.link}><BiLandscape /></p>
              <p className={styles.linkName}>home.</p>
            </motion.div>
          </Link>
          <Link to="/projects">
            <motion.div 
              whileHover={{ width: 200 }} 
              className={(this.props.index === "2" ? `${styles.active}` : `` )}
            >
              <p className={styles.link}><BiLayer /></p>
              <p className={styles.linkName}>projects.</p>
            </motion.div>
          </Link>
          <Link to="/about">
            <motion.div 
              whileHover={{ width: 200 }} 
              className={(this.props.index === "3" ? `${styles.active}` : `` )}
            >
              <p className={styles.link}><BiIdCard /></p>
              <p className={styles.linkName}>about.</p>
            </motion.div>
          </Link>
        </div>
        <div className={styles.partition}>
          <a href="https://github.com/claynaut/jspescasio.dev" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ width: 200 }}>
              <p className={styles.link}><BiCodeAlt /></p>
              <p className={styles.linkName}>source code.</p>
            </motion.div>
          </a>
        </div>

        <div className={styles.navMobile}>
          <div aria-hidden="true"
            className={styles.partitionMobile} 
            onClick={() => this.Toggle()}
            onKeyDown={() => this.Toggle()}
          >
            <div><p className={styles.link}><BiMenu /></p></div>
          </div>

          <div className={styles.headerMobile}>
            <div className={(this.props.index === "1" ? `${styles.activeMobile}` : `` )}>
              <p className={styles.link}><BiLandscape /></p>
              <p className={styles.linkName}>home.</p>
            </div>
            <div className={(this.props.index === "2" ? `${styles.activeMobile}` : `` )}>
              <p className={styles.link}><BiLayer /></p>
              <p className={styles.linkName}>projects.</p>
            </div>
            <div className={(this.props.index === "3" ? `${styles.activeMobile}` : `` )}>
              <p className={styles.link}><BiIdCard /></p>
              <p className={styles.linkName}>about.</p>
            </div>
          </div>

          <div className={styles.partitionMobile}>
            <a href="https://github.com/claynaut/jspescasio.dev" target="_blank" rel="noreferrer">
              <div><p className={styles.link}><BiCodeAlt /></p></div>
            </a>
          </div>
        </div>

        <div className={(this.state.open ? `${styles.navMenuMobile} ${styles.open}` : `${styles.navMenuMobile}`)}>
          <Link to="/">
            <div>
              <p className={styles.link}><BiLandscape /></p>
              <p className={styles.linkName}>home.</p>
            </div>
          </Link>
          <Link to="/projects">
            <div>
              <p className={styles.link}><BiLayer /></p>
              <p className={styles.linkName}>projects.</p>
            </div>
          </Link>
          <Link to="/about">
            <div>
              <p className={styles.link}><BiIdCard /></p>
              <p className={styles.linkName}>about.</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}