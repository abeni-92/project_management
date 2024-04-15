const BodyHeader = ({title, children}) => {
	return (
		<div className="py-4 border-b border-boxdark2 flex flex-col sm:flex-row sm:justify-between sm:items-center md:py-6 dark:border-slate-600">
			 <h2 className="text-3xl text-black font-semibold dark:text-gray">{title}</h2>	
			 {children}
		</div>
	)
}

export default BodyHeader;