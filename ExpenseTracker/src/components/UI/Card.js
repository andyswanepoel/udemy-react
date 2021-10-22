import "./Card.css"

const Card = ({ elTag = 'div', className, children }) => {
	const classes = "card " + className;
	const Tag = `${elTag}`;
	return (
		<Tag className={classes}>
			{children}
		</Tag>
	)
}

export default Card;