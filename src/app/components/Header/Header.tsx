import React from "react";
import styles from "./Header.module.css";
import smartLogo from "../../../assets/img/logos/smart-logo.svg";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useAuth } from "../../store/use-auth";
import { removeUser } from "../profile/userSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="space-between">
          <Grid alignItems="center" display="flex">
            <Link to="/home">
              {" "}
              <img src="/img/logoGNS.svg" alt="logo" />
            </Link>
            <Grid
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Grid display="flex" alignItems="center">
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
            </Grid>
          </Grid>
          <Grid alignItems="center" display="flex">
            {isAuth && (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => dispatch(removeUser())}
                >
                  Выйти
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
