import styles from './about.module.css'
import React from "react";
import Image from "next/image";



const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "GitHub" },
];

export default function AboutSection () {
  return (
    <section id="about">
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Get to know me!
        </h1>
            <p style={{ textAlign: "justify" }}>
              Hi, my name is Sarvnaz and I am a{" "}
              <span style={{ fontWeight: "bold" }}>highly ambitious</span>,
              <span style={{ fontWeight: "bold" }}> self-motivated</span>, and
              <span style={{ fontWeight: "bold" }}> driven</span> Frontend developer
              based in Stockholm,Sweden.
            </p>
            <p style={{ textAlign: "justify" }}>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling,I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <p tyle={{ textAlign: "justify" }}>
              I believe that you should{" "}
              <span style={{ fontWeight: "bold", color: "#38B2AC" }}>never stop growing</span> and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <h1 className={styles.subTitle}>My Skills</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", zIndex: 10 }}>
              {skills.map((item, idx) => {
                return (
                  <p key={idx} className={styles.skill}>
                   {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );
};



