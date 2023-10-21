import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useCalendarStore } from "../../hooks/useCalendarStore";


export const FadDelete = () => {
  
    const {startDeleteEvent, hasEventSelected} = useCalendarStore()

    const handleDelete = () => {
      startDeleteEvent()
    }


  return (
    <IconButton
    sx={{display: hasEventSelected ? '' : 'none'}}
    onClick={handleDelete}
     style={{
        backgroundColor: 'darkred',
        position: 'fixed',
        bottom: '16px',
        left: '16px',  
      }} >
        <DeleteIcon />
    </IconButton>
  )
}
