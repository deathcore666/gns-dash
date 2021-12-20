import styles from './Itas.module.scss';
import DataCard from '../../components/dataCard/DataCard';
import { IncomeInfoAggregateInterface } from '../../shared/interfaces/incomeInfoAggregateInterface';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';

const initialState = Array.from(Array(4).keys()).map(key => ({
  budgetType: 'N/A',
  factVal: 0,
  forecastVal: 0,
  fulfillmentPercentage: 0
}));

function Itas() {
  const [dataCardsData, setDataCardsData] = useState<IncomeInfoAggregateInterface[]>(initialState);
  useEffect(() => {
    const temp = dataCardsData;
    Array.from(Array(4).keys()).map(async key => {
      const response: IncomeInfoAggregateInterface = await axios.get(`http://10.111.15.123:5010/api/ITAS/IncomeInfoAggregate?budgetType=${key}`)
    });
  }, []);


  return (
      <div className={ styles.itas }>
        <Container maxWidth="lg">
          <div className={ styles.dataCardsContainer }>
            { Array.from(Array(4).keys()).map(key => (
                <DataCard { ...props } key={ key }/>
            )) }
          </div>
        </Container>
      </div>
  );
}

export default Itas;
