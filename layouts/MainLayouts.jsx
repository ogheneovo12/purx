import React from "react";
import Footer from "../pages/components/miniComponents/Footer";
import Navbar from "../pages/components/miniComponents/Navbar";
import styles from "./styles.module.scss";

function MainLayouts({ children }) {
  return (
    <div className="">
      <Navbar />
      <main className={styles?.main}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayouts.propTypes = {};

export default MainLayouts;
