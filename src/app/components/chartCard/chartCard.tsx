import React from "react";
import LineChart from "../lineChart/LineChart";
import styles from './chartCard.module.css'

type Props = {
    title: string;
    }

export const ChartCard = ({title}: Props) => {
  return (
    <div className={styles.boxCard}>
      <div className={styles.styleTxt}>
        <p>{title}</p>
      </div>
      <div>
          <LineChart/>
      </div>
    </div>
  );
};