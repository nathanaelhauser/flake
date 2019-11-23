const execuseTallies = eventArr => {
  return eventArr.reduce((tallies, event) => {
    tallies[event.excuse_id] = (tallies[event.excuse_id] ? tallies[event.excuse_id] + 1 : 1)
    console.log(tallies)
    return tallies
  }, [])
}