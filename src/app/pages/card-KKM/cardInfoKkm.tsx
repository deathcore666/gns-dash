import { Container, Grid } from "@mui/material";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ChartInfoPunchedCard } from "../../components/chartInfoCard/chartInfoPunchedCard";
import styles from "../../components/chartCard/chartCard.module.css";
import { useEffect, useState } from "react";
import { GetRegisterKKM, GetTotalCheckSumKKM } from "../../shared/interfaces/dataCardInterface";
import axios from "axios";
import { ChartInfoRegisterCard } from "../../components/chartInfoCard/chartInforegisteredCard";
import BasicTable from "../../components/chartInfoCard/chartInfoTable";

function CardInfo() {
  const [data, setData] = useState<GetTotalCheckSumKKM>();
  const [register, setRegister] = useState<GetRegisterKKM>()

  useEffect(() => {
    async function edecData() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/KKM/GetTotalCheckSum"
      );
      setData(res.data);
    }
    async function registerData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/KKM/GetRegKKM"
      );
      setRegister(register.data);
    }
    edecData();
    registerData()

  }, []);

  const sum = data?.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const count = data?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const registerCount = register?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" justifyContent="center">
        <Grid item xl={12}>
          <div className={styles.txtStyle}>
            <p>ККМ</p>
          </div>
        </Grid>

        <Grid item xs={4}>
          <ChartInfoPunchedCard
            count={`${count} шт`}
            title="Общая сумма пробитых чеков за 2021год"
            sum={`${sum} сом`}
          />
          <ChartInfoRegisterCard
            count={`${registerCount} шт`}
            title="Зарегистрированных ККМ за 2021 год"
          />
        </Grid>

        <Grid item xs={8}>
          <ChartCard title="Кол-во зарегистрированных ККМ за 2021год" />
        </Grid>
        <Grid item xs={12}>
          <BasicTable/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CardInfo;
