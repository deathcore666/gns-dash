import { Container, Grid } from "@mui/material";
import { Menu } from "../../components/menu";

function MainMenu() {
  return (
      
    <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Menu title="Иснак" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="Кабинет НП" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ACB" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
          <Menu title="ЭСФ" value="Lorem ipsum dolor sit amet consectetur adipisicing elit HELLO" url="https://salyk.kg/"/>
 
        </Grid>
      </Container>
  );
}

export default MainMenu;