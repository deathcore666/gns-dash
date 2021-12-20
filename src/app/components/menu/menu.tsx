
import React from "react";
import styles from './menu.module.css';

type Props = {
title: string;
value: string;
url: string;
img: string;
}

export const Menu = ({title, url, value, img}: Props) => {
  return (
    <div className={styles.boxMenu}>
      <div className={styles.boxStyle}>
        <div className={styles.photo}>
        <img src={img} alt="logo" />
        </div>
       
        <div className={styles.boxTxt}>
          <p>{title}</p>
        </div>
        <div className={styles.txtLorem}>
          <p>{value}</p>
        </div>
        <div className={styles.line}></div>
        <a className={styles.styleButton} href={url}>Подробнее</a>
      </div>
    </div>
  );
};