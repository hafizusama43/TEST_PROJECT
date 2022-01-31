import React, { useEffect, useState } from 'react';
import ShowUserComponent from './Component';
// import { useNavigate } from 'react-router-dom';

const ShowUser = () => {

    const [datas, setData] = useState([]);
    const [currentUsers,setCurrentUsers] = useState([]);
    const [users, setUsers] = useState("");

    useEffect(() => {
        callAbout();
    }, []);

    useEffect(() =>{
        console.log("Datas updated ",datas);
    },[datas])

    const callAbout = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
            });
            data = await res.json()
            setCurrentUsers(data)
            setData(data);
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
        } catch (error) {
            console.log("error");

        }
    }

    const currUser = (e) => {
        console.log(e.target.value);
        setUsers(e.target.value)
    }

    const filterUserByName = (e) => {
        console.log("Datas........................",datas);
        const fu = currentUsers.filter((val, index) => {
            return val.name === users});
        console.log("Filtered Result..............",fu);
        console.log(`Selected User ${users}`);
        setData(fu);
        e.preventDefault();
    }
    let data = "";
    


    return (
        <ShowUserComponent
        datas={datas}
        currentUsers={currentUsers}
        users={users}
        callAbout={callAbout}
        filterUserByName={filterUserByName}
        currUser={currUser}
        ></ShowUserComponent>
    )
};

export default ShowUser;