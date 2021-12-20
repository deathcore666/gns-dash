import styles from './Itas.module.scss';
import DataCard from '../../components/dataCard/DataCard';
import { Box, Container } from '@mui/material';
import BarChart from '../../components/barChart/BarChart';

const props = Array.from(Array(4).keys()).map(i => ({ number: i }));

function Itas() {
  return (
      <div className={ styles.itas }>
        <Container maxWidth="lg">
          <div className={ styles.dataCardsContainer }>
            { props.map((i) => <DataCard { ...i } key={ i.number }/>) }
          </div>
          <Box
            sx={{
              bgcolor: 'white',
              height: '630px',
              marginTop: '30px'
            }}>
            <BarChart/>
          </Box>
        </Container>
      </div>
  );
}

export default Itas;
