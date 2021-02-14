import styles from "./AddItemForm";

const AddItemForm = () => {
  return (
    <div className={styles.formContainer}>
      <button>X</button>
      <form>
        <label>Item: </label>
        <input type={"text"} id={"itemInput"} /> <br />
        <label>Measurement: </label>
        <input type={"text"} id={"measurementInput"} /> <br />
        <label>Quantity: </label>
        <input type={"text"} id={"quantityInput"} /> <br />
      </form>
    </div>
  );
};

export default AddItemForm;
