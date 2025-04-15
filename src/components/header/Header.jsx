import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.buttons}>
        {/* <button className={styles.sogot}>Sogot</button>
        <button className={styles.contact}>Contact</button> */}
      </div>
    </header>
  );
}
