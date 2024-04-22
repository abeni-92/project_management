const Progress = ({ percent, color }) => {
  return (
    <div className="dark:bg-gray-700 w-full rounded-full bg-gray">
      <div
        className={`rounded-full bg-${color} p-0.5 text-center text-xs font-medium leading-none text-blue-100`}
        style={{ width: percent }}
      >
        {percent}
      </div>
    </div>
  );
};

export default Progress;
