// Convert google calendar time to unix timestamp
const toUnixTime = time => 
  moment(time, 'YYYY-MM-DDTh:mm:ss-8:00').format('X')

// Color the list group item based on the excuse severity
const severityColor = severity => {
  switch (severity) {
    case 5:
    case 4:
      return 'list-group-item-danger'
    case 3:
      return 'list-group-item-warning'
    case 2:
      return 'list-group-item-info'
    case 1:
    default:
      return ''
  }
}

// Get all user events with excuses
axios.get(`/events/user/${localStorage.getItem('google_id')}`)
  .then(({ data }) => {
    // Remove the events that have already started
    data.filter(({ start }) => toUnixTime(start) > moment().format('X'))
      // Sort the events from starting soonest and on
      .sort((a, b) => toUnixTime(a.start) - toUnixTime(b.start))
      // Create a list group item for each event
      .forEach(event => {
        document.getElementById('eventList').innerHTML += `
          <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start ${severityColor(event.excuse.severity)}">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-2 h5">${event.event}</h5>
              <small>${moment(event.start, 'YYYY-MM-DDTh:mm:ss-8:00').fromNow()}</small>
            </div>
            <div class="d-flex w-100 justify-content-start">
              <p>${event.excuse.excuse}</p>
            </div>
          </a>
        `
      })
  })
  .catch(e => console.error(e))