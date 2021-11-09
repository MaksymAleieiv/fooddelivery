import React from 'react'
import LoginForm from './forms/LoginForm'
import RegistrationForm from './forms/RegistrationForm'

function AuthorizationForms(props) {
    const [currentForm, setCurrentForm] = React.useState(true)
    if(currentForm)
        return (
            <RegistrationForm setIsOpen={props.setIsOpen} setCurrentForm={setCurrentForm}/>
        )
    else 
        return (
            <LoginForm setIsOpen={props.setIsOpen} setCurrentForm={setCurrentForm}/>
        )
}

export default AuthorizationForms
