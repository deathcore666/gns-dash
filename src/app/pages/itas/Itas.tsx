import styles from './Itas.module.scss';
import DataCard from '../../components/dataCard/DataCard';
import { DataCardInterface } from '../../shared/interfaces/dataCardInterface';

function Itas() {
  const props: DataCardInterface = {
    "budgetType": "Республиканский бюджет",
    "forecastVal": 75137470,
    "factVal": 99055122.0,
    "fulfillmentPercentage": 107.99
  }
  return (
      <div className={styles.itas}>
        <div className={styles.wrapper}>
          <DataCard {...props}/>
        </div>
      </div>
  );
}

export default Itas;
