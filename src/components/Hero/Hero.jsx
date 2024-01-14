import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oscar Rodriguez</h1>
        <p className={styles.description}>
          I’m a Software Engineering student at 
          the University of California - Irvine and
          set to graduate in the summer of 2025. 
          Open to any Internship opportunities.
        </p>
        <a href="hero/Oscar_Rodriguez_Resume.pdf" className={styles.contactBtn} download="Oscar_Rodriguez_Resume.pdf">Download Resume (PDF) </a>
      </div>
      <img
        src={getImageUrl("hero/profile_icon.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};