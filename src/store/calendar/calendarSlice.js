
import { createSlice } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Entrevista con intelecto',
    notes: 'miercoles 9:15 AM',
    start: addDays(new Date().setHours(9, 15), 4),
    end: addDays(new Date().setHours(10, 0), 4),
    user: { _id: 135, name: 'fernan' }
  }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
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
                if(event._id === payload._id){
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
        }
}
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent} = calendarSlice.actions;