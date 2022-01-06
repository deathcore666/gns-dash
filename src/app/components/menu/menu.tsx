import { CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "tabler-react";
import styles from "./menu.module.css";

type Props = {
  title: string;
  value: string;
  url: string;
  img: string;
};

export const Menu = ({ title, url, value, img }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={3} className={styles.boxStyle}>
      <CardContent>
        <Typography>
          <img src={img} alt="logo" />
        </Typography>
        <Typography variant="h6" component="div" className={styles.boxTxt}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
        <div className={styles.line}></div>
        <Link to={url} className={styles.styleButton}>
          Подробнее
        </Link>
      </CardContent>
    </Card>
  );
};
