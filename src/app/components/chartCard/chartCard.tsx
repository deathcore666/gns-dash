import { CardContent, Typography } from "@mui/material";
import React from "react";
import { Card } from "tabler-react";
import LineChartEsf from "../lineChart/LineChartEsf";
import styles from '../../components/chartInfoCard/chartInfo.module.css'

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
          <LineChartEsf url="http://10.111.15.123:5085/api/ESF/GetESFRegistrationByMonth" />
        </Typography>
      </CardContent>
    </Card>
  );
};