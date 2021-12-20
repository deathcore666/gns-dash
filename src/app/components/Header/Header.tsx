
import React from 'react';
import styles from './Header.module.css';
import smartLogo from '../../../assets/img/logos/smart-logo.svg'
import { Container, Grid } from '@mui/material';





export const Header = () => {

  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center">
        <img src="/img/logoGNS.svg" alt="logo" />

          <div className={styles.txtStyle}>
            Государственная Налогавая Служба
            <br />
            Кыргызской Республики
          </div>
          <div className={styles.vl}></div>
          <div>
            <img alt={"smart-logo"} src={smartLogo} />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

