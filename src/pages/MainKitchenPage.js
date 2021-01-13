import React, { Component } from "react";
import ItemTable from "../components/ItemTable";

class MainKitchenPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Kitch</h1>
        <ItemTable />
      </div>
    );
  }
}

export default MainKitchenPage;
