
import { Container, Grid } from "@mui/material";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ChartInfoCard } from "../../components/chartInfoCard/chartInfoCard";
import styles from '../../components/chartCard/chartCard.module.css'

function CardInfo() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xl={12}>
          <div className={styles.txtStyle}>
            <p>ККМ</p>
          </div>
        </Grid>
        
        <Grid item xs={6}>
          <ChartInfoCard
            count="21432шт"
            title="Общая сумма пробитых чеков за 2021год"
            sum="50206186151451.47сом"
          />
        </Grid>
        <Grid item xs={6}>
          <ChartCard title="Кол-во зарегистрированных ККМ за 2021год" />
        </Grid>
      </Grid>
       

    </Container>
  );
}

export default CardInfo;