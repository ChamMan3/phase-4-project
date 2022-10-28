import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
// import monthGridPlugin from "@fullcalendar/monthgrid"

// const events = [
//     {
//       id: 1,
//       title: 'event 1',
//       start: '2022-10-14',
//       end: '2022-10-14',
//     },
//     {
//       id: 2,
//       title: 'event 2',
//       start: '2022-10-16',
//       end: '2022-10-16',
//     },
//     { 
//       id: 3, 
//       title: 'event 3', 
//       start: '2022-10-17', 
//       end: '2022-10-20' },
//   ];

export default function Calendar(){
    const handleDateSelect = (selectInfo) => {
        let title = prompt("Go to events to make an event dummy")
        let calendarAPI = selectInfo.view.calendar


        

        calendarAPI.unselect()
        
        // name: title,
        // day: selectInfo.startStr[8]+selectInfo.startStr[9],
        // month: selectInfo.startStr[5]+selectInfo.startStr[6]
        // The Above code is for making events in the calendar page then using the code above it should format the info we need for our post for backend

        if (title) {
            calendarAPI.addEvent({
                name: title,
                day: selectInfo.startStr[8]+selectInfo.startStr[9],
                month: selectInfo.startStr[5]+selectInfo.startStr[6]
            })
        } console.log(title)
        console.log(selectInfo.startStr[8]+selectInfo.startStr[9])
        console.log(selectInfo.startStr[5]+selectInfo.startStr[6])
    }

    return (
        <>
            <FullCalendar 
            // events={events}
            aspectRatio="2.5"
            initialView="dayGridMonth"
            headerToolbar={{
                left: "prev next today",
                center: "title",
                right: "dayGridMonth,dayGridWeek"
            }}
            buttonText={{
                today:"Today",
                month: "Month",
                week: "Week"
            }}
            // editable={true}
            selectable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            select={handleDateSelect}
            />
        </>

    )
}