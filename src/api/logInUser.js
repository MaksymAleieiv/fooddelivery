import mainInstance from './mainInstance'
import { useCurrentUserActions } from '../store/current-user-slice/useCurrentUserActions';

export default function logInUser() {
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
