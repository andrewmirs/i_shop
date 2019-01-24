import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../general/form/input';
import { validation } from '../../../helpers';

let SignUpForm = props => {

    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="row">
                <Field name="firstName" size="s6" label="First Name" component={Input} />
                <Field name="lastName" size="s6" label="Last Name" component={Input} />
            </div>
            <div className="row">
                <Field name="email" size="s6 offset-s3" label="Email" component={Input} />
            </div>
            <div className="row">
                <Field name="password" size="s6" label="Password" type="password" component={Input} />
                <Field name="confirmPassword" size="s6" label="Confirm Password" type="password" component={Input} />
            </div>
            <div className="row">
                <div className="col s6 center">
                    <button type="button" className="btn black white-text">Cancel</button>
                </div>
                <div className="col s6 center">
                    <button className="btn grey darken-1">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

function validate({firstName, lastName, email, password, confirmPassword}){
    const errors = {};
    
    // Error handling for name
    if(!firstName){
        errors.firstName = 'Please enter your first name';
    }
    if(!lastName){
        errors.lastName = 'Please enter your last name';
    }

    // Error handling for email
    if(!email){
        errors.email = 'Please enter your email';
    } else if (!validation.email(email)){
        errors.email = 'Please enter a valid email. Example: me@mail.com'
    }

    // Error handling for password
    if(!password){
        errors.password = 'Please enter a password';
    } else if (!validation.password(password)){
        errors.password = 'Password must contain upper and lowercase letters, a special character, a number and be at least 8 characters long';
    }
    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

SignUpForm = reduxForm({
    form: 'sign-up',
    validate, 
    initialValues: {
        firstName: 'Moana',
        lastName: 'LukaNukiDua',
        email: 'underdasea@gmail.com',
        password: 'asDF1234!',
        confirmPassword: 'asDF1234!'
    }
})(SignUpForm);

export default SignUpForm;