const getEventsForUser = id => {
  axios.get(`/events/user/${id}`)
    .then(events => {
      console.log(events)
    })
    .catch(e => console.error(e))
}

const getEventsForExcuse = id => {
  axios.get(`/events/excuse/${id}`)
    .then(events => {
      console.log(events)
    })
    .catch(e => console.error(e))
}
