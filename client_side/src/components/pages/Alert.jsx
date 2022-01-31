import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        const capital = lower.charAt(0).toUpperCase() + lower.slice(1)
        return capital;
    }
    return (

        <>
            <div style={{ height: "50px" }}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <span className='alert'>  {capitalize(props.alert.msg)} </span>
                </div>}
            </div>
        </>


    )
}

export default Alert