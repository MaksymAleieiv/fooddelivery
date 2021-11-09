import React from 'react'
import registerUser from '../../../../../../../api/registerUser'
import PhoneInput from '../common-form-components/PhoneInput/PhoneInput'
import './styles.scss'

function LoginForm(props) {
    const initialState = {username : '', password : ''}
    const [formState, setFormState] = React.useState(initialState)
    const [formErrorsState, setFormErrorsState] = React.useState(initialState)

    const onChange = (e) => {
        let { name, value } = e.target;
        setFormState({...formState, [name] : value.substring(0, 31)})
    }

    const clearErrorMsg = (e) => {
        let { name } = e.target;
        setFormErrorsState({...formErrorsState, [name] : ''})
    }

    const onSubmit = () => {
        let i = 0;
        for (const [key, value] of Object.entries(formState)) {
            if(value.length === 0) {
                setFormErrorsState(p => ({...p, [key] : 'This field is required'}));
                i++;
            }
        }
        if(i === 0) registerUser(formState, props.setIsOpen, setFormErrorsState)
    }

    const onBlur = () => {
        if(formState.password.length < 8 && formState.password.length !== 0) formErrorsState({...formErrorsState, password: 'Password is too short'})
    }

    return (
        <div className='modal-auth-form'>
            <h3>Sign In</h3>
            <div className='auth-form'>
                <PhoneInput phoneNumber={formState.username} setPhoneNumber={c => setFormState({...formState, username : c})} phoneNumberError={formErrorsState.username} setPhoneNumberError={c => setFormErrorsState({...formErrorsState, username : c})}/>
                <div className='login-password'>
                    <input placeholder='Password' name='password' value={formState.password} maxLength={15} className={!!formErrorsState.password ? 'error' : ''} onFocus={clearErrorMsg}
                        onChange={onChange} onBlur={onBlur} type='password' 
                        />
                    <span className='errorText'>{formErrorsState.password}</span>
                </div>
                <button onClick={onSubmit}>Sign In</button>
            </div>
            <div className='auth-form__bottom'>
                Don't have an account ? 
                <span onClick={() => props.setCurrentForm(p => !p)}> Sign Up</span>
            </div>
        </div>
    )
}

export default LoginForm

