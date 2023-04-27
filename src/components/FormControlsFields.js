import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "../Crad";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BasicTextFields() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quanity, setQuanity] = useState(0);
  const [invoiceItems, setInvoiceItems] = useState([]);
  console.log(invoiceItems);

  const changeHandler = (e) => {
    setProduct(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const quantityHandler = (e) => {
    setQuanity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInvoiceItems((prev) => [...prev, { product, price, quanity }]);
  };
  // console.log(typeof price, typeof quanity);

  const totalQuantity = invoiceItems.reduce(
    (total, item) => total + Number(item.quanity),
    0
  );
  const totalAmount = invoiceItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quanity),
    0
  );

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Please Entered All The Details Here
      </Typography>

      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Product"
          variant="outlined"
          name="product"
          value={product}
          onChange={changeHandler}
        />
        <TextField
          type="number"
          label="Quantity"
          variant="outlined"
          name="quantity"
          value={quanity}
          onChange={quantityHandler}
        />
        <TextField
          type="number"
          label="Price"
          variant="filled"
          name="price"
          value={price}
          onChange={priceHandler}
        />
        <Button variant="contained" size="large" type="submit">
          Submit
        </Button>
      </Box>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">product</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">price</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceItems.map((item) => (
                <StyledTableRow key={item.name}>
                  <StyledTableCell align="right">
                    {item.product}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.quanity}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {Number(item.price) * Number(item.quanity)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <TableRow>
                <TableCell> Total Quanity: </TableCell>
                <TableCell align="right">{totalQuantity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3} colSpan={3}>
                  Total Price
                </TableCell>
                <TableCell align="right">{totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Container>
        <Stack direction="row" spacing={5}>
          <Card data={invoiceItems} title="Data Displayed : " />
        </Stack>
      </Container>
    </>
  );
}
