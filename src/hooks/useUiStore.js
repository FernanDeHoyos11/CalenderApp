import { useDispatch, useSelector } from "react-redux"
import { onModalClose, onModalOpen } from "../store/ui/uiSlice"



export const useUiStore = () => {

    const dispatch = useDispatch()

    const {isDataModalOpen} = useSelector(state => state.ui)

    const onDateModalOpen = () => {
        dispatch(onModalOpen())
    }

    const onDateModalColse = () => {
        dispatch(onModalClose())
    }

  return {
    isDataModalOpen,
    onDateModalOpen,
    onDateModalColse
  }
}
