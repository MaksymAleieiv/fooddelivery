import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actions } from './cartSlice'

export const useCartActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}