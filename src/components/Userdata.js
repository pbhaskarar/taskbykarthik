import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


 const Tabledata = () => {
    const [data, setData] = useState([])
useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/users').then(
    res => setData(res.data)
 )
}, [])
  return (
    <>
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">UserName</StyledTableCell>
            <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="left">phone&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Website&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Address&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Company&nbsp;</StyledTableCell>
            <StyledTableCell align="left">street&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Zipcode&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => <TableRow key={item.id}>
            <StyledTableCell>{item.name}</StyledTableCell>
            <StyledTableCell align="left">{item.username}</StyledTableCell>
            <StyledTableCell align="left"><a href = "mailto:`{item.email}`">{item.email}&nbsp; </a> </StyledTableCell>
            <StyledTableCell align="left">+91{item.phone} &nbsp;</StyledTableCell>
            <StyledTableCell align="left"><a href="https://{item.website}" target="_blank" rel="noreferrer">{item.website}&nbsp;</a></StyledTableCell>
            <StyledTableCell align="left">{item.address.city}&nbsp;</StyledTableCell>
            <StyledTableCell align="left">{item.company.name}&nbsp;</StyledTableCell>
            <StyledTableCell align="left">{item.address.street}&nbsp;</StyledTableCell>
            <StyledTableCell align="left">{item.address.zipcode.split('-').join('')}&nbsp;</StyledTableCell>     
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default Tabledata
