import React from 'react';
import styles from './DataCard.module.scss';

import budgetLogo from '../../../assets/img/logos/budget-card-logo.svg'
import { DataCardInterface } from '../../shared/interfaces/dataCardInterface';

const DataCard = (props: DataCardInterface) => (
  <div className={styles.dataCard}>
    <div className={styles.topSection}>
      <img alt={'budget-logo'} src={budgetLogo}/>
      <div className={styles.cardTitle}>
        <p>{props.budgetType}</p>
      </div>
    </div>
    <div className={styles.middleSection}>
      <div className={styles.fact}>Факт</div>
      <div className={styles.factVal}>
        {props.factVal} сом
      </div>
      <div className={styles.percentageArea}>
        <div className={styles.percentage}>
          {props.fulfillmentPercentage} <p>за последний месяц</p>
        </div>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.progressBar}>
      </div>
      <div className={styles.forecastVal}>
        Прогноз: <p>{props.forecastVal}</p>
      </div>
    </div>

  </div>
);

export default DataCard;
