import React from "react";
import styles from "./Component1disabled.module.scss";

const Component1disabled = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.listItemDisabled}>
        <img
          alt=""
          className={styles.iconOutlinedSuggestedCircleC}
          src="https://static.overlay-tech.com/assets/8ce03ead-3e6f-4560-adb6-9f35a6d177a7.svg"
        />
        <p className={styles.checked}>Disabled</p>
      </div>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
      />
    </div>
  );
};

export default Component1disabled;
