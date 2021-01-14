import React, { Component } from "react";
import ItemsService from "../../service/api/ItemsService";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import styles from "./ItemTable.css";

class ItemTable extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // get the users items from the api
    ItemsService.getItemsForUser(1)
      .then(response => {
        var items = response.items;
        this.setState({
          items: items
        });
      })
      .catch(e => {
        console.log(e);
        return;
      });
  }

  render() {
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
            {Object.entries(this.state.items).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{value.name}</TableCell>
                <TableCell align="center">
                  {value.quantity}
                  {value.measurement}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ItemTable;
