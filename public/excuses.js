let eventsArr = []

document.getElementById('randomForm').style.display = 'block'
document.getElementById('randomConfirm').style.display = 'none'

axios.get(`/google/calendars/${localStorage.getItem('google_id')}`)
  .then(({ data }) => {
    data.forEach(calendar => {
      document.querySelector('#selectCalendar').innerHTML +=
        `<option value=${calendar.id}>${calendar.summary}</option>`
    })
  })
  .catch(e => console.log(e))

document.querySelector('body').addEventListener('click', e => {

  if (e.target.id === 'selectCalendar') {
    const calID = document.getElementById('selectCalendar').value
    if (calID !== 'Choose Calendar') {
      axios.get(`/google/events/${localStorage.getItem('google_id')}/${calID}`)
        .then(({ data }) => {
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

  if (e.target.id === 'randomBtn') {
    e.preventDefault()
    let excuseID = ''

    axios.get(`/excuses/${document.getElementById('randomSeverity').value}`)
      .then(({ data }) => {
        excuseID = data.id
        document.getElementById('randomConfirm').style.display = 'block'
        document.getElementById('randomExcuse').textContent =
          data[Math.floor(Math.random() * (data.length - 1))].excuse
      })
      .catch(e => console.error(e))
  }

  if (e.target.id === 'addBtn') {
    e.preventDefault()
    console.log('addBtn')

    const calendar_id = document.getElementById('selectCalendar').value
    const index = document.getElementById('selectEvent').value

    if (calendar_id !== 'Choose Calendar' && index !== 'Choose Event' 
      && document.getElementById('newExcuse').value) {
        console.log('post excuse')
        axios.post('/excuses', {
          severity: document.getElementById('newSeverity').value,
          excuse: document.getElementById('newExcuse').value
        })
          .then(({ data }) => {
            console.log(data)
            axios.post('/events', {
              user_id: localStorage.getItem('google_id'),
              excuse_id: data.id,
              start: eventsArr[index].start,
              end: eventsArr[index].end,
              calendar_id,
              event: eventsArr[index].summary
            })
              .then(({ data }) => {
                console.log('post event')
              })
              .catch(e => console.error(e))
          })
          .catch(e => console.error(e))
    }
  }

  if (e.target.id === 'addRandom') {
    e.preventDefault()

    const calendar = document.getElementById('selectCalendar').value
    const event = document.getElementById('selectEvent').value

    if (calendar !== 'Choose Calendar' && event !== 'Choose Event' && document.getElementById('randomExcuse').textContent) {
      
    }
  }

})