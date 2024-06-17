import SignUpNow from "../components/SignUpNow";
import styles from "./ProfReview.module.css";
import React from "react";

const ProfReview = () => {
  return (
      <div className={styles.profReview}>
          <div className={styles.homePage}>
              <a href="/" >
                  <img src="/Logo_White.png" className={styles.homeButton}  alt="Home"/> {/* Make sure you have an icon */}
              </a>
              <div className={styles.headlineAndSubhead}>
                  <div className={styles.professorReview}>Professor Review</div>
                  <div className={styles.feelFreeTo}>
                      Feel free to share your valuable review with us
                  </div>
              </div>
              <SignUpNow/>
              <img className={styles.loginPageImg} alt="" src="/login-page-img.svg"/>
          </div>
      </div>
  );
};

export default ProfReview;
