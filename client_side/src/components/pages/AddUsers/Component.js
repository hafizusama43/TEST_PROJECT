import React from 'react';
import Add from '../../../images/Add.png'


const AddUserComponent = (props) => {
    const { data, changed, sendData ,formError} = props;
    return (
        <>

            <div className="container register">
                <div className="row register_main ">
                    <div className="col-lg-6 reg_form">
                        <form method='POST' onSubmit={sendData}>
                            <h2>Add User</h2>
                            <div className="row input_data">
                                <input type="text" placeholder='Enter Name' onChange={changed} value={data.name} name='name' />
                                <small className='input_errors'>{formError.name}</small>
                            </div>
                            <div className="row input_data">
                                <input type="email" placeholder='Enter Email' onChange={changed} value={data.email} name='email' />
                                <small className='input_errors'>{formError.email}</small>
                            </div>
                            <div className="row input_data">
                                <input type="text" placeholder='Enter Phonenumber' onChange={changed} value={data.phone} name='phone' />
                                <small className='input_errors'>{formError.phone}</small>
                            </div>
                            <div className="row input_data">
                                <input type="number" placeholder='Enter Age' onChange={changed} value={data.age} min="18" max="60" name='age' />
                                <small className='input_errors'>{formError.age}</small>
                            </div>
                            <button type='submit' >Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="reg_img">
                            <img src={Add} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
};

export default AddUserComponent;