import { Container, Grid } from "@mui/material";
import { Menu } from "../../components/menu";
import isnakLogo from '../../../assets/img/logos/isnak.svg'
import cabinetLogo from '../../../assets/img/logos/cabinetNP.svg'
import acbLogo from '../../../assets/img/logos/ACB.svg'
import esfLogo from '../../../assets/img/logos/ESF.svg'
import patentLogo from '../../../assets/img/logos/E-patent.svg'
import postLogo from '../../../assets/img/logos/post.svg'
import kkmLogo from '../../../assets/img/logos/KKM.svg'
import mtLogo from '../../../assets/img/logos/MT.svg'

function MainMenu() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row">
        <Grid item xs={3}>
          <Menu
            title="Иснак"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={isnakLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="Кабинет НП"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={cabinetLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="ACB"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={acbLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="ЭСФ"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={esfLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="Е-патент"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={patentLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="Свободный пост"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={postLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="ККМ"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={kkmLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="ЭТТН"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={cabinetLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="Дислокация"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={cabinetLogo}
            url="https://salyk.kg/"
          />
        </Grid>
        <Grid item xs={3}>
          <Menu
            title="ГАИС МТ"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO"
            img={mtLogo}
            url="https://salyk.kg/"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainMenu;