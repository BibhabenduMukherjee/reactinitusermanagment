import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useState } from "react"
import { updateNestedProperty } from "../lib/updateNestedProperty";
import { validateEmail } from "../lib/validateEmail";

function AddUserModel({ addUser }) {

    const [openModal, setOpenModal] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        address: {
            street: "",
            city: "",
            zipcode: ""
        }
    })
    function handleChange(e) {
        const { name, value } = e.target;
        setNewUser(prevUserInfo => updateNestedProperty(prevUserInfo, name, value));
    }
    function handleAddUser() {
        const { name, email, address} = newUser
        console.log(newUser);
        if (!name || !email || !address) {
            alert("Please fill all the fields")
            return
        }

        const isValidEmail = validateEmail(newUser.email);
        if (!isValidEmail) {
            alert('Invalid email address.');
            return;
        }
        addUser(newUser)
        setOpenModal(false)
        setNewUser({})
    }
    return (
        <>
            <button className="text-[12px]  w-[100px] rounded-md bg-pink-500 text-white  p-1" onClick={() => setOpenModal(true)}>Add user</button>
            <Modal size={"sm"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add User</Modal.Header>
                <Modal.Body>
                    <div className="space-y-2">
                        <div className=" block">
                            <Label htmlFor="small" value="Name" />
                        </div>
                        <TextInput id="base" value={newUser?.name} name="name" autoComplete="off" type="text" sizing="sm" onChange={handleChange} placeholder={"name"} />

                        <div className=" block">
                            <Label htmlFor="small" value="Email" />
                        </div>
                        <TextInput name="email" value={newUser?.email} id="base" autoComplete="off" type="text" sizing="sm" onChange={handleChange} placeholder={"email"} />

                        <div className=" block">
                            <Label htmlFor="small" value="street" />
                        </div>
                        <TextInput id="base" name="address.street"  autoComplete="off" value={newUser?.address?.street} type="text" sizing="sm" onChange={handleChange} placeholder={"street"} />

                        <div className=" block">
                            <Label htmlFor="small" value="city" />
                        </div>
                        <TextInput id="base" name="address.city" autoComplete="off" value={newUser?.address?.city} type="text" sizing="sm" onChange={handleChange} placeholder={"city"} />
                        <div className=" block">
                            <Label htmlFor="small" value="zipcode" />
                        </div>
                        <TextInput id="base" name="address.zipcode" autoComplete="off" value={newUser?.address?.zipcode} type="text" sizing="sm" onChange={handleChange} placeholder={"zipcode"} />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAddUser}>Add</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancle
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddUserModel