import styles from './Itas.module.scss';
import DataCard from '../../components/dataCard/DataCard';
import { Container } from '@mui/material';

const props = Array.from(Array(4).keys()).map(i => ({ number: i }));

function Itas() {
  return (
      <div className={ styles.itas }>
        <Container maxWidth="lg">
          <div className={ styles.dataCardsContainer }>
            { props.map((i) => <DataCard { ...i } key={ i.number }/>) }
          </div>
        </Container>
      </div>
  );
}

export default Itas;
