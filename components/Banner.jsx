import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

export default function Banner({ title, subtitle, imgUrl }) {
  const handleOnPlay = () => {
    console.log("HnadleonPlay");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subTitle}>{subtitle}</h2>
          <div className="playBtnWrapper">
            <button onClick={handleOnPlay} className={styles.btnWithIcon}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play Icon"
                width={32}
                height={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})
          `,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
}
