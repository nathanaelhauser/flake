let calendar_id = ''
let event = ''


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
          console.log(data)
          data.forEach(event => {
            document.getElementById('selectEvent').innerHTML +=
              `<option value=${event.summary}>${event.summary}</option>`
          })
        })
        .catch(e => console.log(e))
    }
  }

  if (e.target.id === 'randomBtn') {
    e.preventDefault()

    axios.get(`/excuses/${document.getElementById('randomSeverity').value}`)
      .then(({ data }) => {
        document.getElementById('randomConfirm').style.display = 'block'
        document.getElementById('randomExcuse').textContent =
          data[Math.floor(Math.random() * (data.length - 1))].excuse
      })
      .catch(e => console.log(e))
  }

  if (e.target.id === 'addBtn') {
    e.preventDefault()

    axios.post('/excuses', {
      severity: document.getElementById('addSeverity').value,
      excuse: document.getElementById('addExcuse').value
    })
      .then(() => {
        console.log('create excuse')
      })
      .catch(e => console.log(e))
  }

})