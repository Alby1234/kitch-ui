import React, { useState, useEffect } from "react";
import ItemsService from "../../service/api/ItemsService";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const ItemTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ItemsService.getItemsForUser(22)
      .then(response => {
        setItems(response);
      })
      .catch(e => {
        console.error(e);
      });
  }, items.length);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length > 0 &&
            Object.entries(items).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{value.name}</TableCell>
                <TableCell align="center">
                  {value.quantity + " "}
                  {value.measurement}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
