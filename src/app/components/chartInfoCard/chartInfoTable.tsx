import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LastChecksInfoFace } from '../../shared/interfaces/dataCardInterface';
import { Typography } from '@mui/material';
import styles from './chartInfo.module.css';



export default function BasicTable() {
  const [check, setCheck] = useState<LastChecksInfoFace>();

  useEffect(() => {
    async function registerData() {
      const response = await axios.get(
        "http://10.111.15.123:5085/api/KKM/LastChecksInfo"
      );
      setCheck(response.data);
    }

    registerData();
  }, []);
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      className={styles.boxMargin}
    >
      <Typography variant="h4" component="div">
        Список из последних 20 чеков
      </Typography>
      <hr />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Чека</TableCell>
            <TableCell align="right">Дата создания</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">Наименование ККМ</TableCell>
            <TableCell align="right">Серийный номер ККМ</TableCell>
            <TableCell align="right">Наименование точки продажи</TableCell>
            <TableCell align="right">Адрес точки продажи</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {check?.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.checkNumber}
              </TableCell>
              <TableCell align="right">{row.dateCreated}</TableCell>
              <TableCell align="right">{row.totalSum}</TableCell>
              <TableCell align="right">{row.kkmName}</TableCell>
              <TableCell align="right">{row.kkmSerialNumber}</TableCell>
              <TableCell align="right">{row.salesPointName}</TableCell>
              <TableCell align="right">{row.salesPointFactAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}