
import { Container, Grid } from "@mui/material";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ChartInfoCard } from "../../components/chartInfoCard/chartInfoCard";
import styles from '../../components/chartCard/chartCard.module.css'

function CardInfoEsf() {
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
            <p>ESF</p>
          </div>
        </Grid>
        
        <Grid item xs={6}>
          <ChartInfoCard
            count="5964шт"
            title="Количество выписанных ЭСФ с суммой за 2021 год"
            sum="158384907730.69сом"
          />
        </Grid>
        <Grid item xs={6}>
          <ChartCard title="Кол-во зарегистрированных НП в ЭСФ по месяцам за 2021год" />
        </Grid>
      </Grid>
       

    </Container>
  );
}

export default CardInfoEsf;