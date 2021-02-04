import React, { Component } from "react";
import Link from "gatsby-link";

import styles from "../styles/blurb.module.css";

export default class Blurb extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className={styles.blurb}>
          <div className={styles.blurbHeader}>
            <div>{this.props.title}</div>
            <div>{this.props.date}</div>
          </div>
          <div className={styles.blurbCaption}>{this.props.caption}</div>
        </div>
      </Link>
    );
  }
}