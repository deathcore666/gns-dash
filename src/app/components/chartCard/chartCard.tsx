import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import LineChart from "../lineChart/LineChart";
import styles from './chartCard.module.css'

type Props = {
    title: string;
    }

export const ChartCard = ({ title }: Props) => {
  return (
    <Card elevation={3} className={styles.cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography component="div">
          <LineChart />
        </Typography>
      </CardContent>
    </Card>
  );
};