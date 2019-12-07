fetch(`/google/calendar/${localStorage.getItem('google_id')}`)
  .then(events => {
    console.log(events)
    // events.forEach(event => {
    //   document.getElementById('eventsList').innerHTML += `
    //     <div class="card">
    //       <div class="card-body">
    //         <h4 class="card-title"><a>${event.summary}</a></h4>
    //         <p class="card-text">${event.description}</p>
    //       </div>
    //     </div>
    //   `
    // })
  })
  .catch(e => console.log(e))