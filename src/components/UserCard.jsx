import EditModel from "./EditModal";


function UserCard({ userUpdate,userDelete, item }) {

    function handleDeleteUser() {
        userDelete(item.id);
    }
    return (
        <>
            <div href="#" className="block   p-3  border border-gray-200 rounded-lg shadow  bg-gray-800/90  ">

                <h5 className="mb-1 text-[15px] font-bold tracking-tight  text-white">{item.name}</h5>
                <p className="text-[10px] text-white ">

                    {item.email}
                </p>


                <div className="flex flex-col ">
                    <p className="text-[9px] mt-2 text-white ">
                        street:  {item.address.street}
                    </p>
                    <p className="text-[9px]  text-white ">
                        city: {item.address.city}

                    </p>
                    <p className="text-[9px]  text-white ">
                        zipcode: {item.address.zipcode}
                    </p>
                </div>

                <div className="flex flex-col mt-3 justify-center">
                    <div className="flex space-x-4  items-center">
                       <EditModel userUpdate = {userUpdate} item= {item}/>
                        <button onClick={handleDeleteUser} className="text-[12px]  w-[50px] rounded-md bg-red-500 text-black p-1">Delete</button>
                    </div>
                </div>


            </div>


        </>)
}

export default UserCard


