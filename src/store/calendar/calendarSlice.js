
import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadEven: true,
        events: [],
        activeEvent: null
     },
    reducers: {
        onSetActiveEvent: (state, {payload} ) => {
            state.activeEvent = payload
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload)
            state.activeEvent = null
        },
        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map( event => {
                if(event.id === payload.id){
                    return payload;
                }
                return event
            })
        },
        onDeleteEvent: (state) => {
            if(state.activeEvent){
                state.events = state.events.filter(event => event._id !== state.activeEvent._id)
                state.activeEvent = null
            }
        },
        onLoadEvents: (state, {payload}) => {
            state.isLoadEven = false
            payload.forEach(event => {
                const exist = state.events.some( dbEvent => dbEvent.id === event._id)
                if(!exist){
                    state.events.push(event)
                }
            });
        },
        onLogoutCalendar: (state) => {
            state.isLoadEven = true
            state.events = []
            state.activeEvent = null
        }
}
});

export const { 
    onSetActiveEvent,
    onAddNewEvent, 
    onUpdateEvent, 
    onDeleteEvent, 
    onLogoutCalendar,
    onLoadEvents} = calendarSlice.actions;