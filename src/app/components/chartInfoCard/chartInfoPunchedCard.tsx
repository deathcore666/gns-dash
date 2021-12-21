
import React from "react";
import styles from './chartInfo.module.css';
import budgetLogo from '../../../assets/img/logos/budget-card-logo.svg'
import { Card, CardContent, Typography } from "@mui/material";

type Props = {
title: string;
count: string;
sum: string;
}

export const ChartInfoPunchedCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={3} className={styles.cardStyle}>
      <CardContent>
        <Typography>
          <img alt={"budget-logo"} src={budgetLogo} />
        </Typography>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Выдано:
        </Typography>
        <Typography variant="h6" component="div">
          {props.count}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          На сумму:
        </Typography>
        <Typography variant="h6" component="div">
          {props.sum}
        </Typography>
      </CardContent>
    </Card>
  );
};