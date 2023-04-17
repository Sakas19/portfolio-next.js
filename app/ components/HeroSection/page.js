import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section id="home">
      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        animation: "fadeIn 1s", 
        animationDelay: "2s", 
        marginTop: "10px", 
        paddingBottom: "16px",
        paddingTop: "16px",


        "@media (min-width: 640px)": {
          paddingTop: "15px",
          paddingBottom: "32px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        "@media (min-width: 768px)": {
          paddingTop: "48px",
        },
      }}>
        <div style={{
          marginTop: "2rem",
          width: "50%",
          "@media (min-width: 640px)": {
            marginTop: 0,
            width: "auto",
          },
        }}>
          <Image src="/hero-image.png" alt="" width={300} height={300} />
        </div>
        <div style={{
          marginLeft: "1rem",
          "@media (min-width: 640px)": {
            marginLeft: 0,
            width: "50%",
          },
        }}>
          <h1 style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
              fontSize: "4rem",
            },
          }}>Hi, I am Sarvnaz!</h1>
          <p style={{
            fontSize: "1.25rem",
            marginTop: "1rem",
            marginBottom: "2rem",
            "@media (min-width: 640px)": {
              fontSize: "2rem",
            },
          }}>
            I am a{" "}
            <span style={{
              fontWeight: "bold",
              color: "#38b2ac",
            }}>
              Frontend developer{" "}
            </span>
            based in Stockholm, Sweden. Working towards creating websites and
            apps that makes life easier and more meaningful.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "bounce 1s infinite",
          }}>
            <HiArrowDown size={35} style={{
              color: "#38b2ac",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}



