import { FaUserPlus } from "react-icons/fa6";
import AddUserModel from "./AddUserModal";
function AddUser({addUser}){
    return (
        <div>
            <div className = "flex bg-pink-00 w-[133px] mt-2 rounded-md items-center space-x-2 ml-2 p-2">
                <div><FaUserPlus/></div>
                <div>
                    <AddUserModel addUser = {addUser}/>
                </div>
            </div>
        </div>
    )
}
export default AddUser