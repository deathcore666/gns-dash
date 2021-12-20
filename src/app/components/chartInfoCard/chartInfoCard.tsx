
import React from "react";
import styles from './chartInfo.module.css';
import budgetLogo from '../../../assets/img/logos/budget-card-logo-0.svg'

type Props = {
title: string;
count: string;
sum: string;
}

export const ChartInfoCard = (props: Props) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardStyle}>
          <div>
          <img alt={'budget-logo'} src={budgetLogo} width={80} height={80}/>
          </div>

        <div className={styles.boxTxt}>
          <p>{props.title}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.txtLorem}>
          <p>Выдано:</p>
        </div>
        <div className={styles.txtSum}>
          <p>{props.count}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.txtLorem}>
          <p>На сумму:</p>
        </div>
        <div className={styles.txtSum}>
          <p>{props.sum}</p>
        </div>
      </div>
    </div>
  );
};
