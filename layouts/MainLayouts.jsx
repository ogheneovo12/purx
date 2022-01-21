import React from "react";
import Navbar from "../pages/components/miniComponents/Navbar";
import styles from "./styles.module.scss";

function MainLayouts({ children }) {
  return (
    <div className="">
      <Navbar />
      <main className={styles?.main}>{children}</main>
    </div>
  );
}

MainLayouts.propTypes = {};

export default MainLayouts;
