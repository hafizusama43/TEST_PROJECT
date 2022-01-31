import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../css/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Panel from './pages/Panel';
import Navbar from './pages/Navbar';
import Home from './pages/Home'
import AddUser from './pages/AddUsers/Container'
import Error from './pages/Error'
import Alert from './pages/Alert';
import ShowUser from './pages/ShowUsers/Container';

const App = () => {
    const [alerts, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }
    return (
        <>

            <Navbar />
            <Panel />
            <Alert alert={alerts} />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/adduser" element={<AddUser showAlert={showAlert} />}></Route>
                <Route path="/showuser" element={<ShowUser />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>

        </>
    )
};

export default App;

