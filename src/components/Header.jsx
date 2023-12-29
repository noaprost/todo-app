import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.iconBtn}>
        <MdOutlineWbSunny />
      </button>
      <div className={styles.textBtn}>
        <button>All</button>
        <button>Active</button>
        <button>Complted</button>
      </div>
    </header>
  );
}
