import React, { Component } from "react";
import ItemsService from "../service/api/ItemsService";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
        <Table style={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Quantity</TableCell>
            </TableRow>
          </TableHead>
          {Object.entries(this.state.items).map(([key, value]) => (
            <TableRow>
              <TableCell>{value.name}</TableCell>
              <TableCell align="center">
                {value.quantity}
                {value.measurement}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    );
  }
}

export default ItemTable;
