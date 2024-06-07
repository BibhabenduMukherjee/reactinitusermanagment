import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { updateNestedProperty } from "../lib/updateNestedProperty";
function EditModel({ userUpdate, item }) {
    const [openModal, setOpenModal] = useState(false)
    const [userInfo, setUserInfo] = useState(item)
   
      function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo(prevUserInfo => updateNestedProperty(prevUserInfo, name, value));
    }
    function handleUpdateUser() {
        //alert(JSON.stringify(userInfo))
        setOpenModal(false)
        userUpdate(item.id, userInfo)

    }
    return (
        <>
            <button className="text-[12px]  w-[50px] rounded-md bg-red-500 text-black p-1" onClick={() => setOpenModal(true)}>Edit</button>
            <Modal size={"sm"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Update User Info</Modal.Header>
                <Modal.Body>
                    <div className="space-y-2">
                        <div className=" block">
                            <Label htmlFor="small" value="Name" />
                        </div>
                        <TextInput id="base" value={userInfo.name} name="name" type="text" sizing="sm" onChange={handleChange} placeholder={item.name} />

                        <div className=" block">
                            <Label htmlFor="small" value="Email" />
                        </div>
                        <TextInput name="email" value={userInfo.email} id="base" type="text" sizing="sm" onChange={handleChange} placeholder={item.email} />

                        <div className=" block">
                            <Label htmlFor="small" value="street" />
                        </div>
                        <TextInput id="base" name="address.street" value={userInfo.address.street} type="text" sizing="sm" onChange={handleChange} placeholder={item.address.street} />

                        <div className=" block">
                            <Label htmlFor="small" value="city" />
                        </div>
                        <TextInput id="base" name="address.city" value={userInfo.address.city} type="text" sizing="sm" onChange={handleChange} placeholder={item.address.city} />
                        <div className=" block">
                            <Label htmlFor="small" value="zipcode" />
                        </div>
                        <TextInput id="base" name="address.zipcode" value={userInfo.address.zipcode} type="text" sizing="sm" onChange={handleChange} placeholder={item.address.zipcode} />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdateUser}>Update</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancle
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EditModel