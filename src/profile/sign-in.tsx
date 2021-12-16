import React from 'react';
import { SignInForm } from './sign-in-form';
import styles from './sign.module.css';
import { Grid } from '@mui/material';

export const SignIn = () => {
  return (
    <div>
      <div className={styles.borderR}>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <SignInForm />
          </Grid>
          <Grid item xs={12} md={6}>
                            <div className={styles.txtSpan}>
                <div>
                  <span>ККМ:</span>20438
                </div>

                <div>
                  <span>Пробито чеков:</span>20438
                </div>
                <div>
                  <span>Выявлено нарушений:</span>20438
                </div>
                <div>
                  <span>Проверка субьектов:</span>20438
                </div>
              </div>
            <img alt="kg" src="/img/kg.svg" width={1000} height={465} />
          </Grid>
        </Grid>
      </div>
      <div className={styles.styleFooter}>
        <img alt="table" src="/img/footer-tab.svg" className={styles.footer_tab}/>

        <img alt="floor" src="/img/footer.svg" className={styles.footerPhoto}/>
      </div>
  
    </div>
  );
};