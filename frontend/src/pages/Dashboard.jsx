
import AppBar from "../components/Appbar"
import {Balance} from "../components/Balance"
import SubHeading from "../components/SubHeading"
import Users from "../components/Users"

export const Dashboard = () => {
    return <div>
        <AppBar />
        <div className="m-8">
            <Balance value={"10000"}/>
            <Users/>
        </div>
    </div>
}