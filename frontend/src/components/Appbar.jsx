// export default function AppBar(){

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useEffect, useState } from "react";
import axios from "axios"
>>>>>>> efd270ec00ad561aa13999dcf75d99fcbce3a357

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
<<<<<<< HEAD
export default function AppBar({balance,userdata}) {
  const navigate=useNavigate();
  
=======
export default function AppBar() {

  const [user,setUser]=useState({});
  useEffect(async()=>{
   await axios.get(" http://localhost:3000/api/v1/user/user")
    .then(response=>{
      setUser(response.data.user);
    })
  })
  console.log("rririri",user)
>>>>>>> efd270ec00ad561aa13999dcf75d99fcbce3a357
  return (
    <div className="shadow-md h-16 bg-gradient-to-r from-blue-400 to-blue-600 flex justify-between items-center px-4">
      <div className="text-white text-lg font-bold">payTm App</div>
      <div className="flex items-center">
<<<<<<< HEAD
        <div className="text-white mr-4">Hello {userdata && userdata.firstname ? userdata.firstname : "Guest"}</div>
        <div className="bg-blue-900 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer" onClick={()=>{navigate("/usercard")}} >
          <div className="text-white text-xl">{userdata && userdata.firstname ? userdata.firstname[0].toUpperCase() : "U"}</div>
=======
        <div className="text-white mr-4">Hello</div>
        <div className="bg-blue-900 h-12 w-12 rounded-full flex items-center justify-center">
          <div className="text-white text-xl">{user && user.firstname && user.firstname.length > 0 && user.firstname[0].toUpperCase()}</div>
>>>>>>> efd270ec00ad561aa13999dcf75d99fcbce3a357
        </div>
      </div>
    </div>
  );
}
