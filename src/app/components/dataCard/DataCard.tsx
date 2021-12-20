import React, { useEffect, useState } from 'react';
import styles from './DataCard.module.scss';

import budgetLogoOne from '../../../assets/img/logos/budget-card-logo-0.svg'
import budgetLogoTwo from '../../../assets/img/logos/budget-card-logo-1.svg'
import budgetLogoThree from '../../../assets/img/logos/budget-card-logo-2.svg'
import budgetLogoFour from '../../../assets/img/logos/budget-card-logo-3.svg'
import { IncomeInfoAggregateInterface } from '../../shared/interfaces/incomeInfoAggregateInterface';
import axios, { AxiosResponse } from 'axios';

const initialState = {
  budgetType: 'N/A',
  factVal: 0,
  forecastVal: 0,
  fulfillmentPercentage: 0
};
const logos = [budgetLogoOne, budgetLogoTwo, budgetLogoThree, budgetLogoFour];

const fetchDataHttp = async (i: number): Promise<AxiosResponse<IncomeInfoAggregateInterface>> => {
  debugger
  return await axios.get(
      `http://10.111.15.123:5010/api/ITAS/IncomeInfoAggregate?budgetType=${ i + 1 }`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
}

const DataCard = (props: { number: number }) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    (async () => {
      const res = await fetchDataHttp(props.number);
      setData(res.data);
    })();
  }, [data.factVal]);
  return  <div className={styles.dataCard}>
    <div className={styles.topSection}>
      <img alt={'budget-logo'} src={logos[props.number]}/>
      <div className={styles.cardTitle}>
        <p>{data.budgetType}</p>
      </div>
    </div>
    <div className={styles.middleSection}>
      <div className={styles.fact}>Факт</div>
      <div className={styles.factVal}>
        {data.factVal} сом
      </div>
      <div className={styles.percentageArea}>
        <div className={styles.percentage}>
          {data.fulfillmentPercentage} <p>за последний месяц</p>
        </div>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.progressBar}>
      </div>
      <div className={styles.forecastVal}>
        Прогноз: <p>{data.forecastVal}</p>
      </div>
    </div>

  </div>;
};

export default DataCard;
