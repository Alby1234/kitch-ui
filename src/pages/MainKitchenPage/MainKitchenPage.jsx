import React, { useState } from "react";
import ItemTable from "../../components/ItemTable/ItemTable";
import styles from "./MainKitchenPage.module.css";
import AddItemForm from "../../components/AddItemForm/AddItemForm";

const MainKitchenPage = () => {
  const [addItemFormStyles, setAddItemFormStyles] = useState(`${styles.modal}`);
  const addItemFormModal = (
    <div className={addItemFormStyles}>
      <AddItemForm onClose={() => setAddItemFormStyles(`${styles.modal}`)} />
    </div>
  );
  return (
    <div>
      <div className={styles.title}>
        <h1>Kitch</h1>
      </div>
      <div className={styles.itemTableContainer}>
        <ItemTable />
        <button
          className={styles.addItems}
          onClick={() =>
            setAddItemFormStyles(`${styles.modal} ${styles.modalVisible}`)
          }
        >
          Add item
        </button>
        {addItemFormModal}
      </div>
    </div>
  );
};

export default MainKitchenPage;
