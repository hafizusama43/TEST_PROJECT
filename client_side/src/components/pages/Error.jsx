import React from 'react';
import Err from '../../images/Err.png'
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <>
            <div className="container register">
                <div className="row register_main ">
                    <div className="col-lg-6 error reg_form">
                        <h2>Error <span>404!</span></h2>
                        <p>The page you requested doesn't exist. </p>
                        <NavLink to="/"><button >Home</button></NavLink>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="reg_img">
                            <img src={Err} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Error;