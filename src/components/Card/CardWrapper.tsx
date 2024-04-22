const CardWrapper = ({children}) => {
	return (
		<div className="flex flex-wrap gap-8 mt-8">
			{children}
		</div>
	)
}

export default CardWrapper;