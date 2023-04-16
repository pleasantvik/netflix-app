import React, { useEffect, useState } from "react";
import Card from "@/components/card/Card";
import styles from "./section-cards.module.css";

export const SectionCards = ({ title, videos = [], size }) => {
  const renderVideoHelper = videos.map((video) => (
    <Card imgUrl={video.imgUrl} size={size} id={video.id} key={video.id} />
  ));
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>{renderVideoHelper}</div>
    </section>
  );
};
