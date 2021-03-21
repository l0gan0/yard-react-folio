import { useState, useEffect } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        sendEmail();
    }

    const sendEmail = () => {
        Axios.post(
          'https://us-central1-yard-contact-form.cloudfunctions.net/submit',
          values
        )
          .then(res => {
            db.collection('emails').add({
              fullname: values.fullname,
              phone: values.phone,
              email: values.email,
              msg: values.msg,
              time: new Date(),
            })
            console.log(values);
          })
          .catch(error => {
            console.log(error)
          })
      }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]
    );

    return { handleChange, values, handleSubmit, errors }

}

export default useForm;