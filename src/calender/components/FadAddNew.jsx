import { IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addDays } from "date-fns";

export const FadAddNew = () => {

    const {onDateModalOpen} = useUiStore()
    const {setActive} = useCalendarStore()

    const handleOpenModal = () => {
        setActive({
            title: '',
            notes: '',
            start: addDays(new Date().setHours(9, 15), 4),
            end: addDays(new Date().setHours(10, 0), 4),
            user: { _id: 135, name: 'fernan' }})
        onDateModalOpen()
    }


  return (
    <IconButton
    onClick={handleOpenModal}
     style={{
        backgroundColor: 'cyan',
        position: 'fixed',
        bottom: '16px',
        right: '16px',  
      }} >
        <AddIcon color="secondary"/>
    </IconButton>
  )
}
