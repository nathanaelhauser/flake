let eventsArr = []
let excuse_id

document.getElementById('randomForm').style.display = 'block'
document.getElementById('randomConfirm').style.display = 'none'

const createEvent = event => {
  axios.post('/events', event)
    .then(() => window.location = '/Calendar')
    .catch(e => console.error(e))
}

// All click events
document.querySelector('body').addEventListener('click', e => {

  // When client chooses a calendar
  if (e.target.id === 'selectCalendar') {
    const calID = document.getElementById('selectCalendar').value
    if (calID !== 'Choose Calendar') {
      axios.get(`/google/events/${localStorage.getItem('google_id')}/${calID}`)
        .then(({ data }) => {
          console.log(data)
          document.getElementById('selectEvent').innerHTML = '<option selected>Choose Event</option>'
          eventsArr = []
          data.forEach((event, i) => {
            document.getElementById('selectEvent').innerHTML +=
              `<option value=${i}>${event.summary}</option>`
            eventsArr.push({
              summary: event.summary,
              start: event.start.dateTime,
              end: event.end.dateTime
            })
          })
        })
        .catch(e => console.log(e))
    }
  }

  // Grab a random excuse for the client
  if (e.target.id === 'randomBtn') {
    e.preventDefault()

    axios.get(`/excuses/${document.getElementById('randomSeverity').value}`)
      .then(({ data }) => {
        const randomIndex = Math.floor(Math.random()*(data.length - 1))
        document.getElementById('randomConfirm').style.display = 'block'
        document.getElementById('randomExcuse').textContent = data[randomIndex].excuse
        excuse_id = data[randomIndex].id
        console.log(data)
        console.log(excuse_id)
      })
      .catch(e => console.error(e))
  }

  // Add a new excuse to db and to event
  if (e.target.id === 'addBtn') {
    e.preventDefault()
    console.log('addBtn')

    const calendar_id = document.getElementById('selectCalendar').value
    const index = document.getElementById('selectEvent').value

    if (calendar_id !== 'Choose Calendar' 
      && index !== 'Choose Event' 
      && document.getElementById('newExcuse').value) {
        console.log('post excuse')
        axios.post('/excuses', {
          severity: document.getElementById('newSeverity').value,
          excuse: document.getElementById('newExcuse').value
        })
          .then(({ data }) => {
            createEvent({
              user_id: localStorage.getItem('google_id'),
              excuse_id: data.id,
              start: eventsArr[index].start,
              end: eventsArr[index].end,
              calendar_id,
              event: eventsArr[index].summary
            })
          })
          .catch(e => console.error(e))
    }
  }

  // Add a random excuse to event
  if (e.target.id === 'randomAdd') {
    e.preventDefault()

    const calendar_id = document.getElementById('selectCalendar').value
    const index = document.getElementById('selectEvent').value

    if (calendar_id !== 'Choose Calendar' 
      && index !== 'Choose Event' 
      && excuse_id) {
        createEvent({
          user_id: localStorage.getItem('google_id'),
          excuse_id,
          start: eventsArr[index].start,
          end: eventsArr[index].end,
          calendar_id,
          event: eventsArr[index].summary
        })
    }
  }

})

// Grab client calendars from Google Calendar
axios.get(`/google/calendars/${localStorage.getItem('google_id')}`)
  .then(({ data }) => {
    data.forEach(calendar => {
      document.querySelector('#selectCalendar').innerHTML +=
        `<option value=${calendar.id}>${calendar.summary}</option>`
    })
  })
  .catch(e => console.log(e))