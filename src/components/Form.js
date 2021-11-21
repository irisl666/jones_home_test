import React, { useState, useEffect } from 'react';
import InputValidation from '../components/InputValidation';
import ValidationUtil from '../components/ValidationUtil';
import './Form.css';

const Form = ({ sendEmail }) => {
    const [errors, setErrors] = useState({});
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    useEffect(() => {
        disableEnableFormBtn()
    }, [values, errors])

    const isFormEmpty = () => {
        return !Object.values(values).some(x => (x !== null && x !== ''));
    }

    const handleSubmit = e => {
        e.preventDefault();
        sendEmail(e);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const updateErrors = (name, value, regex, condition) => {
        setErrors({ ...ValidationUtil.validate(name, value, regex, condition) });
    }

    const isValid = () => {
        return (!isFormEmpty() && !Object.keys(errors).length);
    }

    const disableEnableFormBtn = () => {
        setDisabledBtn(!isValid());
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} noValidate>
                <h1>
                    Jones Form
                </h1>
                <div className='form-inputs'>
                    <InputValidation
                        labelText={'First Name:'}
                        className={'form-input'}
                        type={'text'}
                        name={'firstName'}
                        placeholder={'Enter your first name'}
                        value={values.firstName}
                        onChange={handleChange}
                        errors={errors}
                        onBlur={updateErrors}
                        condition={values.firstName.length >= 2}
                        regex={/^[A-Za-z]+$/}
                    />
                </div>
                <div className='form-inputs'>
                    <InputValidation
                        labelText={'Last Name:'}
                        className={'form-input'}
                        type={'text'}
                        name={'lastName'}
                        placeholder={'Enter your last name'}
                        value={values.lastName}
                        onChange={handleChange}
                        errors={errors}
                        onBlur={updateErrors}
                        condition={values.lastName.length >= 2}
                        regex={/^[A-Za-z]+$/}
                    />
                </div>
                <div className='form-inputs'>
                    <InputValidation
                        labelText={'Email:'}
                        className={'form-input'}
                        type={'email'}
                        name={'email'}
                        placeholder={'Enter your email'}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={updateErrors}
                        errors={errors}
                        regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                    />
                </div>
                <div className='form-inputs'>
                    <InputValidation
                        labelText={'Phone Number:'}
                        className={'form-input'}
                        type={'text'}
                        name={'phoneNumber'}
                        placeholder={'Enter your phone'}
                        value={values.phoneNumber}
                        onChange={handleChange}
                        errors={errors}
                        onBlur={updateErrors}
                        condition={values.phoneNumber.length === 10}
                        regex={/^\d+$/}
                    />
                </div>

                <button className='form-input-btn' type='submit' disabled={disabledBtn}>
                    Send Email
                </button>

            </form>
        </div>
    );
};

export default Form;

