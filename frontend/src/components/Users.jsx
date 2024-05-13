import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
export const Users=()=>{

const[users,setUsers]=useState([]);
const[filter,setFilter]=useState("");

useEffect(()=>{
  axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
  .then(response=>{
    setUsers(response.data.user)
  })
},[filter])
console.log(users)
  return <>
  <div className='font-bold mt-6 text-lg'>
      Users
  </div>
  <div className='my-2'>  
      <input onChange={(e)=>{
        setFilter(e.target.value)
      }} type="text" placeholder='Search users...' className="w-full px-2 py-1.5 border shadow-md rounded border-slate-200"></input>
  </div>
  <div>
    {users.map((user,index)=><User key={index} user={user}/>)}
  </div>
  </>
}

function User({user}) {
  const navigate = useNavigate();
// console.log(user.firstname)
  return <div className="flex justify-between">
      <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
              <div className="flex m-2 justify-center h-full text-xl">
                  {user.firstname[0].toUpperCase()}
              </div>
          </div>
          <div className="flex flex-col text-xl mt-0.8 justify-center">
              <div>
                  {user.firstname} {user.lastname}
              </div>
          </div>
      </div>

      <div className="mr-0.2 justify-center h-ful">
          <Button onPress={(e) => {
            console.log("fff",user._id)
              navigate("/send?id=" + user._id + "&name=" + user.firstname);
          }} label={"Send Money"} />
      </div>
  </div>
}
export default Users