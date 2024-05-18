
import { useEffect, useState } from "react"
import AppBar from "../components/Appbar"
import {Balance} from "../components/Balance"
// import SubHeading from "../components/SubHeading"
import Users from "../components/Users"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

const [amount, setAmount] = useState(null);
const[userdata,setUserdata]=useState({});
const navigate=useNavigate();
const token=localStorage.getItem("token")
useEffect(() => {
    const fetchData = async () => {
        try {
        
            const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            const formattedBalance = parseFloat(response.data.balance).toFixed(2);
            console.log("fff",response)
                setAmount(formattedBalance);
            
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };
    fetchData();
}, []); 

useEffect(()=>{
    const fetchUserData=async()=>{
    try{
            const allUserdata = await axios.get("http://localhost:3000/api/v1/user/userinfo",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setUserdata(allUserdata.data.user)
            console.log("allUserdata",allUserdata.data.user)
        }
    
    catch(e){
        console.log("error:",e)
    }
}
    fetchUserData();
},[])

    return <div>
        <AppBar balance={amount} userdata={userdata}  />
        <div className="m-8">
            <Balance value={amount?amount:"1000"}/>
            <Users/>
        </div>
    </div>
}