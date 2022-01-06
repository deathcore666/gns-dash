import React from "react";
import { SignInForm } from "./sign-in-form";
import styles from "./sign.module.css";
import { Box, Grid } from "@mui/material";

export const SignIn = () => {
  return (
    <Box  sx={{ flexGrow: 9 }}>
        <Grid
          container
        >
          <Grid item className={styles.borderR} xs sm={6} lg={12} md={10}>
            <Grid item xs lg={3} md={2} sm={3} xl={2}>
              <SignInForm />
            </Grid>
            <Grid
              item
              xs
              md={9}
              lg={8}
              xl={8}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
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
          <Grid
            item
            xs
            lg={12}
            md={12}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            className={styles.styleFooter}
          >
            <img
              alt="table"
              src="/img/footer-tab.svg"
              className={styles.footer_tab}
            />

            <img
              alt="floor"
              src="/img/footer.svg"
              className={styles.footerPhoto}
            />
          </Grid>
        </Grid>
        </Box>
  );
};
