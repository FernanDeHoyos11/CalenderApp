import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";
import { converterEventToDate } from "../helpers/converterEventToDate";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const setActive = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        if (calendarEvent._id) {
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {
            const {data} = await calendarApi.post('/calendar', calendarEvent)
            console.log(data)
            dispatch(onAddNewEvent({ ...calendarEvent, _id: data.eventoAgregado._id, user }))
        }
    }

    const startLoadingEvents = async() => {
        try {

            const {data} = await calendarApi.get('/calendar')
            const events = converterEventToDate(data.evento)
            console.log(events)
            
        } catch (error) {
            console.log(error)
        }
    }

    const startDeleteEvent = () => {
        dispatch(onDeleteEvent())
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
