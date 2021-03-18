import React from "react";
import styles from "./Component1disabled.module.scss";

import PropTypes from "prop-types";
import Done from "@material-ui/icons/Done";
import MenubookIcon from "@material-ui/icons/FiberManualRecordOutlined";

export default function Glossary() {
  return (
    <div className="div-flexColmn">
      <div className="div-flexRow">
        <h2 className="mt-3">Glossary</h2>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
        />
      </div>
      <div className="div-flexRow">
        <p className="p-body2">Oct 30 2020</p>
        <p className="p-body2">15 items</p>
      </div>

      <div className="div-flexRow">
        <MenubookIcon />
        <p className={styles.regular}>Regular</p>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
        />
      </div>
      <div className="div-flexRow">
        <Done />
        <p className={styles.checked}>Disabled</p>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
        />
      </div>
    </div>
  );
}