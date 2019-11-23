const execuseTallies = eventArr => {
  eventArr.reduce((tallies, event) => {
    tallies[event.excuse_id] = (tallies[event.excuse_id] ? tallies[event.excuse_id] + 1 : 1)
    return tallies
  }, tallies = [])
}