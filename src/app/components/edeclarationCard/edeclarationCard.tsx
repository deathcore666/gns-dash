import React from "react";
import styles from '../edeclarationCard/edeclarationCard.module.css'

type Props = {
    title: string;
    count: string;
    color: string;
    img: string;
}

export const EdeclarationCard = ({title, count, color, img}: Props) => {
return(
    <div className={styles.cardBox } style={{background: `${color}`}}>
      <div className={styles.cardStyle}>
          <div>
          <img alt={'budget-logo'} src={img}/>
          </div>

        <div className={styles.boxTxt}>
          <p>{title}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.txtLorem}>
          <p>Выдано:</p>
        </div>
        <div className={styles.txtSum}>
          <p>{count}</p>
        </div>
      </div>
    </div>
)
}