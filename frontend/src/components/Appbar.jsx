// export default function AppBar(){

import { useEffect, useState } from "react";
import axios from "axios"

//   return <div className="shadow h-14 justify-between flex">
//     <div className="flex flex-col justify-center h-full ml-4">
//      payTm App
//     </div>
//     <div className="flex">
//       <div className="flex flex-col justify-center h-full ml-4">
//           Hello
//       </div>
//       <div className="bg slate-200 h-12 w-12 rounded-full flex justify-center mt-1 mr-2">
//         <div className="flex flex-col h-full justify-center text-xl">
//               U
//         </div>
//       </div>
//     </div>
//   </div>
// }
export default function AppBar() {

  const [user,setUser]=useState({});
  useEffect(async()=>{
   await axios.get(" http://localhost:3000/api/v1/user/user")
    .then(response=>{
      setUser(response.data.user);
    })
  })
  console.log("rririri",user)
  return (
    <div className="shadow-md h-16 bg-gradient-to-r from-blue-400 to-blue-600 flex justify-between items-center px-4">
      <div className="text-white text-lg font-bold">payTm App</div>
      <div className="flex items-center">
        <div className="text-white mr-4">Hello</div>
        <div className="bg-blue-900 h-12 w-12 rounded-full flex items-center justify-center">
          <div className="text-white text-xl">{user && user.firstname && user.firstname.length > 0 && user.firstname[0].toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}
