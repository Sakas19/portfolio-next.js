import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section id="home">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/hero-image.png" alt=""  width={300} height={300} priority={true}/>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <h1 className={styles.title}>Hi, I am Sarvnaz!</h1>
          <p className={styles.description}>
            I am a{" "}
            <span className={styles.highlight}>Frontend developer </span>
            based in Stockholm, Sweden. Working towards creating websites and
            apps that makes life easier and more meaningful.
          </p>

          <div className={styles.arrow}>
            <HiArrowDown size={35} />
          </div>
        </div>
      </div>
    </section>
  );
}




