import React, {useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid'
import './calendar.scss'

const Calendar = ()=> {
  const [events,setEvents] = useState([])
  const [posibleDates, setPosibleDates] = useState()

   const datesArray = [{start:'2021-01-19',
     end:'2021-01-20',
     overlap:false}]


  const handleDateClick = (arg) => {

  }

  let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

  const createEventId = () => {
    return String(eventGuid++)
  }

  const INITIAL_EVENTS = [
  {
      groupId: 'availableTime',
      startTime: '10:00',
      endTime: '18:00',
      display: 'inverse-background',
      daysOfWeek: [ 1,2,3,4,5],
      eventOverlap: false,
      backgroundColor:'lightGrey'
    },
    {
      groupId: 'Cita Dentista',
      startTime: '17:00',
      endTime: '18:00',
      daysOfWeek: [3],
      display: 'list-item',
      editable:false,
      overlap:false,
      slotEventOverlap: false
    }
  ]

  const handleSelect = (selectInfo)=> {

    console.log(selectInfo.constraints)
    return selectInfo.constraints

  }


  const handleDateSelect = (selectInfo) => {
    console.log('start',selectInfo.start)
    // console.log('bh',businessH.startTime)

    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    console.log(calendarApi)

    calendarApi.unselect() // clear date selection

    if (title) {
       calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        slotEventOverlap: true

      })
    }
  }


    return (
    <div className="App full-calendar">

        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin  ]}
          initialView="timeGridWeek"
          headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right:''
            }}
          minTime="09:00:00"
          maxTime='15:00:00'
          events={INITIAL_EVENTS}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          dateClick={handleDateClick}
          select={handleDateSelect}
          selectConstraint={INITIAL_EVENTS}
          selectSlotOverlap={false}



        />


    </div>
  );
};

export default Calendar;
