"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false);
  
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="home">
            <h2 className={styles.title}>Sarvnaz Kasaei</h2>
          </Link>
          <div className={styles.menuButton}>
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`${styles.navItems} ${
              navbar ? styles.showNavItems : ""
            }`}
          >
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className={styles.navItem}
                  activeClass={styles.activeNavItem}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              );
            })}
{currentTheme === "dark" ? (
  <button
    onClick={() => setTheme("light")}
    style={{ backgroundColor: '#d2d6dc', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
  >
    <RiSunLine size={25} color="black" />
  </button>
) : (
  <button
    onClick={() => setTheme("dark")}
    style={{ backgroundColor: '#d2d6dc', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
  >
    <RiMoonFill size={25} />
  </button>
)}

          </div>
        </div>
      </div>
    </header>
  );
}
