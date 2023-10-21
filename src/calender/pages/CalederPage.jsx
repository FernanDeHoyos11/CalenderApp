import { addDays } from "date-fns";
import { Navbar } from "../components/Nabvar";
import { Calendar } from 'react-big-calendar';
import { localizer, getMessages } from "../../helpers";
import { CalenadarEven } from "../components/CalenadarEven";
import { useState } from "react";
import { CalendarModal } from "../components/CaledarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FadAddNew } from "../components/FadAddNew";



export const CalederPage = () => {
  const {events, setActive} = useCalendarStore();
  const { onDateModalOpen, onDateModalColse} = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStylesGet = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    };

    return {
      style
    };
  };

  const onDobleClick = (event) => {
    // Tu lógica para manejar el doble clic aquí
    console.log('Doble clic en el evento:', event);
    onDateModalOpen();
  };

  const onClick = (event) => {
    setActive(event)
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        <Calendar
          culture="es"
          defaultView={lastView}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessages()}
          eventPropGetter={eventStylesGet}
          components={{ event: CalenadarEven }}
          onDoubleClickEvent={(e) => onDobleClick(e)} // Maneja el doble clic
          onSelectEvent={(e) => onClick(e)} // Maneja el clic normal
          onView={onViewChange}
        />
      </div>

      <FadAddNew/>
    </>
  );
};
