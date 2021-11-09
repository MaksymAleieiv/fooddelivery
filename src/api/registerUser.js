import mainInstance from './mainInstance'
import { useCurrentUserActions } from '../store/current-user-slice/useCurrentUserActions';

export default function registerUser(formState, setIsOpen, setErrors) {
    let { username, first_name, last_name, password } = formState;
    mainInstance.post('auth/users/', {
        username, first_name, last_name, password
    })
    .then(res => {
        const { changeUser } = useCurrentUserActions()
        changeUser(res.data)
        setIsOpen(false)
    })
    .catch(() => {
        console.log('err')
    })
}
