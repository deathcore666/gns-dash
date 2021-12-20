import styles from './Itas.module.scss';
import DataCard from '../../components/dataCard/DataCard';
import { DataCardInterface } from '../../shared/interfaces/dataCardInterface';
import React from 'react';
import { Container } from '@mui/material';

function Itas() {
  const props: DataCardInterface = {
    "budgetType": "Республиканский бюджет",
    "forecastVal": 75137470,
    "factVal": 99055122.0,
    "fulfillmentPercentage": 107.99
  }
  return (
      <div className={styles.itas}>
        <Container maxWidth="lg">
          <div className={styles.dataCardsContainer}>

          </div>
        </Container>
      </div>
  );
}

export default Itas;
