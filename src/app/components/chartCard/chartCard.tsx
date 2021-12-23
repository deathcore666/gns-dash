import { CardContent, Typography } from "@mui/material";
import React from "react";
import { Card } from "tabler-react";
import styles from '../../components/chartInfoCard/chartInfo.module.css'
import { BarChartEdeclaration } from "../barChart/barChartEdeclaration";

type Props = {
    title: string;
    }

export const ChartCard = ({ title }: Props) => {
  return (
    <Card elevation={4} className={styles.cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography component="div">
          <BarChartEdeclaration />
        </Typography>
      </CardContent>
    </Card>
  );
};