import React from "react";
import PropTypes from "prop-types";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// import getEvents from '../events.js';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    let events = [];

    this.state = {
      events: events
    };

  }

  componentDidMount() {
    const CALENDAR_ID = 'nb2fsnd2ee7qbtlk0uvlit390s@group.calendar.google.com';
    const API_KEY = 'AIzaSyA0vNwZGYDV8M4DyabITZx9nKQ5ULlC5o4';
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then((data) => {

      let events = data.items.map(event =>
        this.convertEvents(event)
      );

      this.setState({
        events: events
      });
    });
  }

  convertEvents = (event) => {
    const startDate = new Date(event.start.date);
    const endDate = new Date(event.end.date);

    return {
      title: "UNAVAILABLE",
      startDate: startDate,
      endDate: endDate
    }
  }

  selectSlot(slotInfo) {
    // console.log(`You have selected from ${slotInfo.start.toLocaleString()} until ${slotInfo.end.toLocaleString()}`);
  }

  render () {
    return (
      <React.Fragment>
        <div className="calendar">
          <BigCalendar
           events={this.state.events}
           defaultDate={new Date()}
           startAccessor='startDate'
           endAccessor='endDate'
           views={['month']}
           selectable={true}
           onSelectSlot={slotInfo =>
            this.selectSlot(slotInfo)
           }
           />
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;


