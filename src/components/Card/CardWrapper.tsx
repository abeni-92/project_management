const CardWrapper = ({children}) => {
	return (
		<div className="flex flex-wrap gap-4 mt-4">
			{children}
		</div>
	)
}

export default CardWrapper;