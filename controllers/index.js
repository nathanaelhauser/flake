// tally for counting how many times an excuse has been used
const excuseTallies = eventArr => {
  eventArr.reduce((tallies, event) => {
    tallies[event.excuse_id] = (tallies[event.excuse_id] ? tallies[event.excuse_id] + 1 : 1)
    console.log(tallies)
    return tallies
  }, [])
}

module.exports = {
  Calendar: require('./calendarControllers'),
  User: require('./userControllers')
}