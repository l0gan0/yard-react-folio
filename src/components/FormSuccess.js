import React from 'react'

const FormSuccess = () => {
    return (
        <div className="form-content-success">
            <span className="greencheck">
                <img src="images/success.svg" alt="Success"/>
            </span>
            <span className="alert">Message sent!</span>
        </div>
    )
}

export default FormSuccess;
