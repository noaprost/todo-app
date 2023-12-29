import React, { useState } from "react";
import styles from "./CheckBox.module.css";
import { FaRegTrashCan } from "react-icons/fa6";

export default function CheckBox({ id, text, handleCheckedItem }) {
  const [checked, setChecked] = useState(false);
  const handleChecked = ({ target }) => {
    setChecked((prev) => !prev);
    handleCheckedItem(target.id, target.isChecked);
  };
  return (
    <div className={styles.checkBox}>
      <label htmlFor={id} className={styles.text}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          className={styles.checkBox}
          onChange={(e) => handleChecked(e)}
        />
        {text}
      </label>
      <button className={styles.iconBtn}>
        <FaRegTrashCan className={styles.icon} />
      </button>
    </div>
  );
}
