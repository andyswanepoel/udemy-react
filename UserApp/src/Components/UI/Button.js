import styles from "./Button.module.css";

const Button = ({ buttonType = "button", onClick = () => {}, children }) => {
  return (
    <button className={styles.button} type={buttonType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
