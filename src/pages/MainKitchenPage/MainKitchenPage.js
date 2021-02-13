import React, { Component } from "react";
import ItemTable from "../../components/ItemTable/ItemTable";
import styles from "./MainKitchenPage.module.css";

class MainKitchenPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className={styles.title}>
          <h1>Kitch</h1>
        </div>
        <div className={styles.itemTableContainer}>
          <ItemTable />
        </div>
      </div>
    );
  }
}

export default MainKitchenPage;
