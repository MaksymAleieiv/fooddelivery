import React from 'react'
import PhoneInput from '../common-form-components/PhoneInput/PhoneInput'
import './styles.scss'
import { useCurrentUserActions } from '../../../../../../../store/current-user-slice/useCurrentUserActions'
import { userApi } from '../../../../../../../api-services/user-service/userService';

function RegistrationForm(props) {

    const { changeUser, changeUserToken } = useCurrentUserActions();

    const initialState = {phone : '', first_name : '', last_name : '', password : '', confirm_password : ''}
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

    const onFocusPassword = (field) => {
        if(field) setFormErrorsState({...formErrorsState, password : ''})
        else setFormErrorsState({...formErrorsState, confirm_password : ''})
        if(formErrorsState.password === formErrorsState.confirm_password && formErrorsState.password === 'Passwords do not match') setFormErrorsState({...formErrorsState, password : '', confirm_password : ''})
    }

    const onBlurPassword = (field) => {
        if(formErrorsState.password !== formErrorsState.confirm_password) setFormErrorsState({...formErrorsState, password : 'Passwords do not match', confirm_password : 'Passwords do not match'})
        if(field && formState.password.length < 8 && formState.password.length !== 0) setFormErrorsState({...formErrorsState, password : 'Password is too short'})
        if(!field && formState.confirm_password.length < 8 && formState.confirm_password.length !== 0) setFormErrorsState({...formErrorsState, confirm_password : 'Password is too short'})
    }
    console.log(userApi)
    const [registerUser, {isLoadingRegister}] = userApi.useRegisterUserMutation();
    const [loginUser, {isLoadingLogin}] = userApi.useLoginUserMutation();
    
    const onSubmit = async () => {
        
        let i = 0;
        for (const [key, value] of Object.entries(formState)) {
            if(value.length === 0) {
                setFormErrorsState(p => ({...p, [key] : 'This field is required'}));
                i++;
            }
        }
        if(i === 0) {
            try {
                let registrationRes = await registerUser(formState);
                //changeUser(data)
                console.log(registrationRes)
                let loginResponse = await loginUser({phone : formState.phone, password: formState.password})
                console.log(loginResponse)
                //let token = loginResponse.data.token
                //changeUserToken(token)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='modal-auth-form'>
            <h3>Sign Up</h3>
            <div className='auth-form'>
                <PhoneInput phoneNumber={formState.phone} setPhoneNumber={c => setFormState({...formState, phone : c})} phoneNumberError={formErrorsState.phone} setPhoneNumberError={c => setFormErrorsState({...formErrorsState, phone : c})}/>
                <div className='auth-form__2inline'>
                    <div>
                        <input placeholder='First name' name='first_name' value={formState.first_name} maxLength={32} className={!!formErrorsState.first_name ? 'error' : ''}
                            onChange={onChange} onFocus={clearErrorMsg}/>
                        <span className='errorText'>{formErrorsState.first_name}</span>
                    </div>
                    <div>
                        <input placeholder='Last name' name='last_name' value={formState.last_name} maxLength={32} className={!!formErrorsState.last_name ? 'error' : ''}
                            onChange={onChange} onFocus={clearErrorMsg}/>
                        <span className='errorText'>{formErrorsState.last_name}</span>
                    </div>
                </div>
                <div className='auth-form__2inline'>
                    <div>
                        <input placeholder='Password' name='password' value={formState.password} maxLength={32} className={!!formErrorsState.password ? 'error' : ''} onFocus={() => onFocusPassword(true)}
                            onChange={onChange} onBlur={() => onBlurPassword(true)} type='password' 
                            />
                        <span className='errorText'>{formErrorsState.password}</span>
                    </div>
                    <div>
                        <input placeholder='Confirm password' name='confirm_password' value={formState.confirm_password} maxLength={32} className={!!formErrorsState.confirm_password ? 'error' : ''} onFocus={() => onFocusPassword(false)}
                            onChange={onChange} onBlur={() => onBlurPassword(false)} type='password'
                            />
                        <span className='errorText'>{formErrorsState.confirm_password}</span>
                    </div>
                </div>
                <button onClick={onSubmit}>Sign Up</button>
            </div>
            <div className='auth-form__bottom'>
                Already have an account ? 
                <span onClick={() => props.setCurrentForm(p => !p)}> Sign In</span>
            </div>
        </div>
    )
}

export default RegistrationForm
