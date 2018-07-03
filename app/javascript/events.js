const CALENDAR_ID = 'nb2fsnd2ee7qbtlk0uvlit390s@group.calendar.google.com';
const API_KEY = 'AIzaSyA0vNwZGYDV8M4DyabITZx9nKQ5ULlC5o4';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
let array;

const getEvents = () => {


  fetch(url)
    .then(response => response.json())
      .then((data) => {
        array = data.items;
      });
  return array;
};

export default getEvents;

const eventGetter = {
  calendar_id: 'nb2fsnd2ee7qbtlk0uvlit390s@group.calendar.google.com',
  api_key: 'AIzaSyA0vNwZGYDV8M4DyabITZx9nKQ5ULlC5o4',
  url: `https://www.googleapis.com/calendar/v3/calendars/${this.calendar_id}/events?key=${API_KEY}`
}
