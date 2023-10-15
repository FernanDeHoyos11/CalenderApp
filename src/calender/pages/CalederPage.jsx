import { addDays } from "date-fns"
import { Navbar } from "../components/Nabvar"
import { Calendar } from 'react-big-calendar'
import { localizer, getMessages } from "../../helpers"
import { CalenadarEven } from "../components/CalenadarEven"
import { useState } from "react"
import { CalendarModal } from "../components/CaledarModal"

const myEventsList = [{
  title: 'Entrevista con intelecto',
  notes: 'miercoles 9:15 AM',
  start: addDays(new Date().setHours(9, 15), 4),
  end: addDays(new Date().setHours(10, 0), 4),
  user: { _id: 135, name: 'fernan' }
}]


export const CalederPage = () => {


  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStylesGet = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
  
    return {
      style
    }
  }
  const onDobleClick = (event) => {
    console.log({ onDobleClick: event })
  }
  
  const onClick = (event) => {
    console.log({ onClick: event })
  }
  
  const onViewChange = (event) => {
    localStorage.setItem('lastView', event)
    setLastView(event)
  }
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Calendar
          culture="es"
          defaultView={lastView}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessages()}
          eventPropGetter={eventStylesGet}
          components={{ event: CalenadarEven }}
          onDoubleClickEvent={onDobleClick}
          onSelectEvent={onClick}
          onView={onViewChange}
        />
      </div>

    </>
  )
}
