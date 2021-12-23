import { Chip, Container, Grid, TableCell, TableRow } from "@mui/material";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ChartInfoCard } from "../../components/chartInfoCard/chartInfoCard";
import styles from "../../components/chartCard/chartCard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  GetInvoiceCountWithSumEsf,
  TopTenForLastMonthEsfInterface,
} from "../../shared/interfaces/dataCardInterface";
import InfoTableEsf from "../../components/infoTable/infoTableEsf";

function CardInfoEsf() {
  const [data, setData] = useState<GetInvoiceCountWithSumEsf>();

  const [invoice, setInvoice] = useState<TopTenForLastMonthEsfInterface>();
  const [ten, setTen] = useState<TopTenForLastMonthEsfInterface>();

  useEffect(() => {
    async function countWithSum() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/ESF/GetInvoiceCountWithSum"
      );
      setData(res.data);
    }

    async function registerData() {
      const response = await axios.get(
        "http://10.111.15.123:5085/api/ESF/TopTenForLastMonth"
      );
      setInvoice(response.data);
    }

    async function topTenData() {
      const response = await axios.get(
        "http://10.111.15.123:5085/api/ESF/TopTenLastInvoices"
      );
      setTen(response.data);
    }

    topTenData();
    countWithSum();
    registerData();
  }, []);

  const row = invoice?.map((row) => (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.invoiceNum}
      </TableCell>
      <TableCell align="right"> <Chip label={`${row.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} сом`} color='success'  /></TableCell>
      <TableCell align="right">{row.invoiceDate.slice(0,10)}</TableCell>
    </TableRow>
  ));

  const rowTen = ten?.map((row) => (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.invoiceNum}
      </TableCell>
      <TableCell align="right"><Chip label={`${row.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} сом`} color='success'  /></TableCell>
      <TableCell align="right">{row.invoiceDate.slice(0,10)}</TableCell>
    </TableRow>
  ));

  const sum = data?.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const count = data?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xl={12}>
          <div className={styles.txtStyle}>
            <p>ESF</p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <ChartInfoCard
            count={`${count} шт`}
            title="Количество выписанных ЭСФ с суммой за 2021 год"
            sum={`${sum} сом`}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Кол-во зарегистрированных НП в ЭСФ по месяцам за 2021год" />
        </Grid>
        <Grid item xs={12}>
          <InfoTableEsf title="ЭСФ по сумме за последний месяц" row={row} />
        </Grid>
        <Grid item xs={12}>
          <InfoTableEsf title="Последних выписанных ЭСФ" row={rowTen} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CardInfoEsf;
