import React from 'react';

const ShowUserComponent = (props) => {
    const { datas, users, currentUsers, callAbout, filterUserByName, currUser } = props
    return (
        <>
           <div className='show_data'>
           <div className="dropdown">
                <select className="form-select" onChange={currUser} aria-label="Default select example">
                    <option selected>All</option>
                    {
                        currentUsers.map((val, index) => {
                            return (
                                <>
                                    <option >{val.name}</option>
                                </>
                            )
                        })
                    }
                </select>
                <button className='btn' onClick={users === "All" ? callAbout : filterUserByName}>Search</button>
            </div>
         

            <div className="">

                <div className="row tables">
                    {
                        datas.length !== 0 ? <table className="table">
                            <thead>
                                <tr className='grid-Container'>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Cell No</th>
                                    <th scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas.map((val, index) => {
                                        return (
                                            <tr className='grid-Container'>
                                                <td>{val._id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.date}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                            : <p className='mr-5 my-5'>No users Added</p>}
                </div>
            </div>
            </div>
        </>
    );
};

export default ShowUserComponent;
