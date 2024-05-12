// export default function SubHeading({label}){
//   return <div className="bg-slate-500 pt-1 px-4 pb-4">
//     {label}
//   </div>
// }
// export default function SubHeading() {
//   return (
//     <div className="bg-gradient-to-r from-blue-400 to-blue-600 pt-4 px-4 pb-2 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-white mb-2">Explore More</h2>
//       <p className="text-lg text-white">Discover exciting features and functionalities.</p>
//     </div>
//   );
// }
export default function SubHeading({ label }) {
  return (
    <div className="bg-slate-500 pt-4 px-4 pb-2 rounded-lg shadow-md text-white text-lg font-semibold">
      {label}
    </div>
  );
}
