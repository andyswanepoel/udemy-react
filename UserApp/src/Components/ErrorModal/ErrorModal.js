import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ onCloseModal }) => {
  return (
    <div
      className={styles["modal-background"]}
      onClick={() => {
        onCloseModal();
      }}
    ></div>
  );
};

const ModalOverlay = ({ errorMessage, onCloseModal }) => {
  return (
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
  );
};

const ErrorModal = ({ errorMessage, onCloseModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorMessage={errorMessage}
          onCloseModal={onCloseModal}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
