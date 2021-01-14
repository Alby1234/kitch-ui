import React, { Component } from "react";
import ItemTable from "../../components/ItemTable/ItemTable";
import styles from "./MainKitchenPage.css";

class MainKitchenPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Kitch</h1>
        <div className={"itemTableContainer"}>
          <ItemTable />
        </div>
      </div>
    );
  }
}

export default MainKitchenPage;
