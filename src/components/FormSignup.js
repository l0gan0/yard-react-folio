
import React from 'react';
import validate from './ValidateInfo';
import useForm from './useForm';

const FormSignup = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content">
            <h3>Send us a message</h3>
            
            <form className="form" onSubmit={handleSubmit}>

            <div className="form-inputs">
                <label htmlFor="fullname" className="form-label">
                    <input 
                        type="text" 
                        name="fullname" 
                        className="form-input" 
                        placeholder="Full Name" 
                        value={values.fullname} 
                        onChange={handleChange} 
                    />
                    {errors.fullname && <span className="required">{errors.fullname}</span>}
                </label>
                
            </div>
            
            <div className="form-inputs">
                <label htmlFor="phone" className="form-label">
                    <input 
                        type="phone"
                        name="phone" 
                        className="form-input" 
                        placeholder="Phone Number" 
                        value={values.phone}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                    <input 
                        type="email"
                        name="email" 
                        className="form-input" 
                        placeholder="Email" 
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="required">{errors.email}</span>}
                </label>
            </div>

            <div className="form-inputs">
                <label htmlFor="msg" className="form-label">
                    <textarea 
                        type="text"
                        name="msg" 
                        className="form-input textarea-input" 
                        placeholder="Your Message" 
                        value={values.msg}
                        onChange={handleChange}
                    />
                    {errors.msg && <span className="required">{errors.msg}</span>}
                </label>
            </div>

            <button className="form-input-send btn contact-btn" type="submit">Send</button>
           
            </form>
        </div>
    )
}

export default FormSignup;
