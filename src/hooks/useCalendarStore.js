import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";
import { converterEventToDate } from "../helpers/converterEventToDate";
import Swal from "sweetalert2";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const setActive = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {

        try {
            if (calendarEvent._id) {
                await calendarApi.put(`/calendar/${calendarEvent._id}`, calendarEvent)
                dispatch(onUpdateEvent({ ...calendarEvent, user }))
                return
            }
            const { data } = await calendarApi.post('/calendar', calendarEvent)
            console.log(data)
            dispatch(onAddNewEvent({ ...calendarEvent, _id: data.eventoAgregado._id, user }))
        } catch (error) {
            console.log(error)
            Swal.fire('error al guardar', error.response.data?.msg, 'error')
        }
    }

    const startLoadingEvents = async () => {
        try {

            const { data } = await calendarApi.get('/calendar')
            const events = converterEventToDate(data.evento)
            dispatch(onLoadEvents(events))
            console.log(events)

        } catch (error) {
            console.log(error)
        }
    }

    const startDeleteEvent = async() => {

        try {
            await calendarApi.delete(`/calendar/${activeEvent._id}`)
            Swal.fire('Eliminado', 'se ha eliminado un evento', 'error')
            dispatch(onDeleteEvent())
        } catch (error) {
            console.log(error)
            Swal.fire('error al eliminar', error.response.data?.msg, 'error')
        }
    }

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        setActive,
        startSavingEvent,
        startDeleteEvent,
        startLoadingEvents
    }
}
