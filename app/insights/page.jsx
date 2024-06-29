"use client";
import { useState, useEffect } from "react";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import dynamic from "next/dynamic";
import styles from "./dataPage.module.css";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "sectionOne", offset: document.getElementById("sectionOne").offsetTop },
        { id: "sectionTwo", offset: document.getElementById("sectionTwo").offsetTop },
        { id: "sectionThree", offset: document.getElementById("sectionThree").offsetTop },
        { id: "sectionFour", offset: document.getElementById("sectionFour").offsetTop },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let active = sections[0].id;
      for (let i = 1; i < sections.length; i++) {
        if (scrollPosition >= sections[i].offset) {
          active = sections[i].id;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <div>
        <nav className={`md:flex md:flex-col md:w-64 border-r border-gray-200 p-4 overflow-y-auto fixed top-0 left-0 transition-transform duration-300 z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} dark:border-gray-800`}>

          <div className={`${styles.nav} grid md:gap-2.5 md:grid-cols-1 lg:grid-cols-none lg:gap-0`}>
            <header className="flex items-center justify-between h-14 px-6 ml-30 mb-12 border-b border-gray-300 dark:border-gray-700 bg-gray-100/40 dark:bg-gray-800/40">Table of Content</header>
            <a href="#sectionOne" className={`${styles.navlink} ${activeSection === "sectionOne" ? styles.active : ""}`}>Categorical Features</a>
            <a href="#sectionTwo" className={`${styles.navlink} ${activeSection === "sectionTwo" ? styles.active : ""}`}>Gene Expression Levels Features</a>
            <a href="#sectionThree" className={`${styles.navlink} ${activeSection === "sectionThree" ? styles.active : ""}`}>Cell Viability Features</a>
            <a href="#sectionFour" className={`${styles.navlink} ${activeSection === "sectionFour" ? styles.active : ""}`}>Target Variables</a>
          </div>

        </nav>
      </div>
      <main className={`${styles.content} flex-1 py-4 md:py-6 lg:py-12 md:pl-64 pr-8`}>
        <div className="max-w-3xl mx-auto grid gap-4">
          <div id="sectionOne">
            <SectionOne />
          </div>
          <div id="sectionTwo">
            <SectionTwo />
          </div>
          <div id="sectionThree">
            <SectionThree />
          </div>
          <div id="sectionFour">
            <SectionFour />
          </div>
        </div>
      </main>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
