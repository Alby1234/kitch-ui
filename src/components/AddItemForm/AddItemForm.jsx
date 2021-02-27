import styles from "./AddItemForm.module.css";

const AddItemForm = () => {
  return (
    <div className={styles.container}>
      <button className={styles.quitButton}>X</button>
      <div className={styles.formContainer}>
        <div>
          <label for="item">Item: </label>
          <input id="item" type="text" />
          <br />
          <label for="measurement">Measurement: </label>
          <input id="measurement" type="text" />
          <br />
          <label for="quantity">Quantity: </label>
          <input id="quantity" type="text" />
        </div>
        <button className={styles.addButton}>Add</button>
      </div>
    </div>
  );
};

export default AddItemForm;
