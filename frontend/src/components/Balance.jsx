
// export const Balance = ({ value }) => {
//   return <div className="flex">
//       <div className="font-bold text-lg">
//           Your balance
//       </div>
//       <div className="font-semibold ml-4 text-lg">
//           Rs {value}
//       </div>
//   </div>
// }
export const Balance = ({ value }) => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 112 0v2a1 1 0 11-2 0V9zM7 8a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1zm4-1a1 1 0 00-1 1v2a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <div className="font-semibold text-lg mb-1">Your Balance</div>
        <div className="font-bold text-xl">Rs {value}</div>
      </div>
    </div>
  );
};
