"use client";
import Link from "next/link";

const OperationAction = ({row, operationId}) => {
	const data = row
	const handleClick = () => {
		alert(`${data.Name} Clicked!`)
		console.log('OperationID: ',operationId)
	}
	return (
		<div className="flex items-center gap-4" onClick={() => {handleClick()}}>
			<Link href={`/operation/${operationId}`} className="bg-boxdark px-4 my-1 text-white rounded-md">Open</Link>
		</div>
	)
}

export default OperationAction;