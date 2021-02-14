import React from "react";
import ItemTable from "../../components/ItemTable/ItemTable";
import styles from "./MainKitchenPage.module.css";

const MainKitchenPage = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Kitch</h1>
      </div>
      <div className={styles.itemTableContainer}>
        <ItemTable />
        <button className={styles.addItems}>Add item</button>
      </div>
    </div>
  );
};

export default MainKitchenPage;
