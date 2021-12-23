import { Container, Grid } from "@mui/material";
import { EdeclarationCard } from "../../components/edeclarationCard/edeclarationCard";
import styles from '../../components/edeclarationCard/edeclarationCard.module.css'

import budgetLogo from '../../../assets/img/logos/edc-log-y.svg'
import budgetLogoGreen from '../../../assets/img/logos/edec-log-green.svg'
import budgetLogoBlue from '../../../assets/img/logos/edec-log-blue.svg'
import { EdeclarationDto } from "../../shared/interfaces/dataCardInterface";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChartCard } from "../../components/chartCard/chartCard";

function Edeclaration() {

  const [data0, setData0] = useState<EdeclarationDto>();
  const [data1, setData1] = useState<EdeclarationDto>();
  const [data2, setData2] = useState<EdeclarationDto>();

  useEffect(() => {

    async function edeclarationData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/Edeclaration"
      );
      setData0(register.data[0]);
      setData1(register.data[1])
      setData2(register.data[2])
    }
    edeclarationData()

  }, []);

  const count = data0?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const count1 = data1?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <div className={styles.txtStyle}>
            <p>Edeclaration</p>
          </div>
        </Grid>
        <Grid item xl={4} lg={4} md={5} sm={6}>
          <EdeclarationCard
            title={data0?.name}
            count={`${count} шт`}
            color="#F5EED8"
            img={budgetLogo}
          />
        </Grid>

        <Grid item xl={4} lg={4} md={5} sm={6}>
          <EdeclarationCard
            title={data1?.name}
            count={`${count1} шт`}
            color="#CDE9DC"
            img={budgetLogoGreen}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={5} sm={6}>
          <EdeclarationCard
            title={data2?.name}
            count={`${data2?.count} шт`}
            color="#CEE5F5"
            img={budgetLogoBlue}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <ChartCard title="Кол-во сданных в электронном виде отчетов за год"/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Edeclaration;