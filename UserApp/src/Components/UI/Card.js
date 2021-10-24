import styles from "./Card.module.css";

const Card = ({ elName, className, children }) => {
  const Tag = `${elName}`;

  return <Tag className={`${styles.card} ${className ?? ""}`}>{children}</Tag>;
};

export default Card;
