import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actions } from './currentUserSlice'

export const useCurrentUserActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}