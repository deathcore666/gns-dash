import { Container, Grid } from "@mui/material";
import { EdeclarationCard } from "../../components/edeclarationCard/edeclarationCard";
import styles from '../../components/edeclarationCard/edeclarationCard.module.css'

import budgetLogo from '../../../assets/img/logos/edc-log-y.svg'
import budgetLogoGreen from '../../../assets/img/logos/edec-log-green.svg'
import budgetLogoBlue from '../../../assets/img/logos/edec-log-blue.svg'

function Edeclaration() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xl={12}>
          <div className={styles.txtStyle}>
            <p>Edeclaration</p>
          </div>
        </Grid>
        <Grid item xl={4}>
          <EdeclarationCard title="Справки о налоговой регистрации для открытия счета в банке" count="10088шт" color="#F2C94C" img={budgetLogo}/>
        </Grid>
        <Grid item xl={4}>
          <EdeclarationCard title="Справки о налоговой регистрации для открытия счета в банке" count="10088шт" color="#27AE60" img={budgetLogoGreen}/>
        </Grid>
        <Grid item xl={4}>
          <EdeclarationCard title="Справки о налоговой регистрации для открытия счета в банке" count="10088шт" color="#2D9CDB" img={budgetLogoBlue}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Edeclaration;