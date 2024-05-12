// export function InputBox({label,placeholder,onChange}){
//     return <div>
//         <div classname="text-sm font-medium text-left py-2">
//             {label}
//         </div>
//         <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1"/>
//     </div>
// }
export function InputBox({ label, placeholder, onChange }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-left mb-1">{label}</label>
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    );
  }
  