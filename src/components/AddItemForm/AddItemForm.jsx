import styles from "./AddItemForm.module.css";

const AddItemForm = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <button className={styles.quitButton} onClick={() => onClose()}>
        X
      </button>
      <div className={styles.formContainer}>
        <div>
          <label htmlFor="item">Item: </label>
          <input id="item" type="text" />
          <br />
          <label htmlFor="measurement">Measurement: </label>
          <input id="measurement" type="text" />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <input id="quantity" type="text" />
        </div>
        <button className={styles.addButton}>Add</button>
      </div>
    </div>
  );
};

export default AddItemForm;
