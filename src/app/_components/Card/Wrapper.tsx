export const CardWrapper = ({children}: any) => {
	return (
		<div className="flex flex-wrap items-center gap-6 mt-8">
			{children}
		</div>
	)
}

export const GridWrapper = ({children}: any) => {
	return (
		<div className="mt-15 grid grid-cols-1 justify-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
			{children}
		</div>
	)
}

export const VerticalWrapper = ({children}: any) => {
	return (
		<div className="flex flex-col gap-6">
			{children}
		</div>
	)
}
