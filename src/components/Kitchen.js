import React, { Component } from "react";
import ItemsService from "../service/api/ItemsService";

class Kitchen extends Component {
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
      <table>
        <tbody>
          {Object.entries(this.state.items).map(([key, value]) => (
            <tr key={key}>
              <td>
                {value.name}, {value.quantity}
                {value.measurement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Kitchen;
