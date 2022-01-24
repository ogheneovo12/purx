import React from "react";
import Footer from "../components/miniComponents/Footer";
import Navbar from "../components/miniComponents/Navbar";
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
