import React from "react";
import styles from "./Component1.module.scss";

const Component1 = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.listItem}>
        <div className={styles.bullet} />
        <p className={styles.checkbox}>Regular</p>
      </div>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
      />
    </div>
  );
};

export default Component1;
