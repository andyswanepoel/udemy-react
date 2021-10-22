import styles from "./UserListItem.module.css";

const UserListItem = ({userName, userAge}) => {
	return (
		<li className={styles["user-list-item"]}>
			{userName} ({userAge} years old)
		</li>
	)
}

export default UserListItem;