import { useState } from "react"
import UserCard from "./UserCard"
import AddUser from "./AddUser"
// responsible for showing user in ui, and declearation of  functions =>  creating user,updating user and deleting user
function Main({ data }) {

  const [user, setUser] = useState(data)
  function userDelete(id) {
    const updatedUser = user.filter(user => user.id !== id);
    setUser(updatedUser);
  }
  function updateUser(id, updatedUserInfo) {
    console.log("updatedUserInfo", updatedUserInfo);
    const updatedUser = user.map(user => user.id === id ? { ...user, ...updatedUserInfo } : user)
    console.log(updatedUser);
    setUser(updatedUser)
}
function addUser(newUser){
   let lastId = user[user.length-1].id;
   const newUserWithId = { id: lastId + 1, ...newUser };
   const updatedUserList = [...user, newUserWithId];
   setUser(updatedUserList);
   //console.log(updatedUserList);

}

  return (
    <div className="flex flex-col space-y-2">
      <AddUser
      addUser = {addUser}
      />
      <div className="grid m-1 gap-1 grid-cols-3 md:grid-cols-4">
        {user.length > 0 && user.map((item) => (
          <UserCard userUpdate={updateUser} userDelete={userDelete} key={item.id} item={item} />
        ))}
      </div>
    </div>

  )
}

export default Main