import React from 'react';
import '../../css/panel.css'
import { NavLink } from 'react-router-dom';
const Panel = () => {
    return (
        <>
            <div className="bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase ">
                </div>
                <div className="list-group list-group-flush my-3">
                    <NavLink to="/" className="list-group-item list-group-item-action bg-transparent second-text "><i
                        className="fas fa-tachometer-alt me-2"></i>Home</NavLink>
                    <NavLink to="/adduser" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-project-diagram me-2"></i>Add Users</NavLink>
                    <NavLink to="/showuser" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-chart-line me-2"></i>Show Users</NavLink>

                </div>
            </div>
        </>
    )
};

export default Panel;
