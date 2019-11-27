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

const getUsers = _ => {
  axios.get('/users')
    .then(users => {
      console.log(users)
    })
    .catch(e => console.error(e))
}

const getExcuses = _ => {
  axios.get('/excuses')
    .then(excuses => {
      console.log(excuses)
    })
    .catch(e => console.error(e))
}

