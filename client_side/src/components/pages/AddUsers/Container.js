import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddUserComponent from './Component';
const AddUser = (props) => {
    const history = useLocation();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
    });
    const [formError, setFormError] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    const changed = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })

    }

    const sendData = async (e) => {
        e.preventDefault();
        const { name, email, phone, age } = data
        setFormError(validate(data))
        // setIsSubmit(true)
        console.log(formError);


        try {
            const api = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, age
                })
            })
            const data = await api.json()
            if (data.error) {
                props.showAlert(data.error, "warning")
            }
            if (data.success) {
                props.showAlert(data.success, "success")
                history("/showuser")
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    age: "",
                });
            }

        } catch (error) {
            console.log("Error");
        }
    }


    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        }else if (!regex.test(values.email)) {
            errors.email = "Invalid Email"
        }
       
        if (!values.phone) {
            errors.phone = "Phonenumber is required"
        }
        if (!values.age) {
            errors.age = "Age is required"
        }else if(values.age >60 || values.age <18){
            errors.age = "Age must be between 18 and 60"
        }
        return errors;
    }
    return (
        <>
            <AddUserComponent
                data={data}
                changed={changed}
                sendData={sendData}
                formError={formError}
            />
           

        </>
    )
};

export default AddUser;