import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = ({ errorMessage, onCloseModal }) => {
  return (
    <div className={styles["modal-background"]}>
      <div className={styles["modal-container"]}>
        <h2 className={styles["modal-header"]}>Submission Error</h2>
        <p className={styles["error-message"]}>{errorMessage}</p>
        <Button
          onClick={() => {
            onCloseModal();
          }}
        >
          Close Modal
        </Button>
      </div>
    </div>
  );
};

export default ErrorModal;
