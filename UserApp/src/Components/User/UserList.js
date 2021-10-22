import UserListItem from "./UserListItem";
import Card from "../UI/Card";
import { hashCode } from "../../helpers/helpers";
import styles from "./UserList.module.css";


const UserList = ({users}) => {
	if (users.length === 0) {
		return (
		<Card elName="p" className={styles["no-user-list"]}>
			Sorry, no users available. Please add some users.
		</Card>
		)
	}

	return (
		<Card elName="ul" className={styles["user-list"]}>
			{users.map(user => {
				return (
					<UserListItem key={hashCode(user.name)} userName={user.name} userAge={user.age} />
				)
			})}
		</Card>
	)
}

export default UserList;