import React from "react"
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';


export default function Footer () {
  return (
    <footer style={{maxWidth: "3xl", margin: "0 auto", padding: "4"}}>
      <hr style={{width: "100%", height: "0.5", margin: "8 0", backgroundColor: "neutral-200", border: "none"}}></hr>
      <div style={{display: "flex", flexDirection: "column", textAlign: "center", color: "neutral-900", "@media(min-width: 768px)": {flexDirection: "row", justifyContent: "space-between"}}}>
        <div div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "neutral-500", "@media(min-width: 768px)": {marginBottom: "1"}}}>
          © 2023 Sarvnaz Kasaei<a  href="/" style={{textDecoration: "underline", ":hover": {textDecoration: "none"}}}></a>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "1 0"}}>
          <a href="https://github.com/Sakas19/" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              style={{transition: "transform 0.2s", cursor: "pointer", color: "neutral-500", ":hover": {transform: "translateY(-1px)"}}}
              size= {30}
            />
          </a>
          <a
            href="https://twitter.com/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              style={{transition: "transform 0.2s", cursor: "pointer", color: "neutral-500", ":hover": {transform: "translateY(-1px)"}}}
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              style={{transition: "transform 0.2s", cursor: "pointer", color: "neutral-500", ":hover": {transform: "translateY(-1px)"}}}
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

