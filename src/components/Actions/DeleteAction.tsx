const DeleteAction = ({ row }) => {
	const data = row;
	const handleClick = () => {
	  alert(`${data.Name} Deleted!`);
	};
	return (
	  <div className="flex items-center gap-4" onClick={handleClick}>
		<button className="bg-red text-white font-semibold my-1 px-4 rounded-sm">Delete</button>
	  </div>
	);
  };
  
  export default DeleteAction;
  