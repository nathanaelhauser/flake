document.addEventListener('click', e => {
  
  // Login button on the index page
  if (e.target.id === "customBtn") {
    console.log('customBtn')
    const location = `http://${window.location.host}/`
    // Obtain a google authentication url by
    //  posting current location to server at
    //  google/auth route
    axios.post(`${location}google/auth`, { location })
      .then(({ data }) => {
        window.location = data.authURL
      })
      .catch(e => console.error(e))
  }

  // For any page with the navbar
  //  if the signout link is clicked
  if (e.target.id === "signout") {
    console.log('signing user out')
    localStorage.removeItem('google_id')
    // Go back to index page
    window.location = `http://${window.location.host}`
  }
})






const buildExcuse = ({ id, excuse, severity }) => {
  let excuseElem = document.createElement('tr')
  excuseElem.innerHTML = `
      <td class="item" data-id="${id}">
        Your excuse: ${excuse}
       <br> Intensity: ${severity} </br>
      </td>
      <td class="item" data-id="${id}">
      </td>
      `
  return excuseElem
}

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
// document.getElementById("addExcuse").addEventListener("click", e => {
//   e.preventDefault()
//   axios.post('/excuses', {
//     excuse: document.getElementById('excuse').value,
//     severity: document.getElementById('severity').value
//   })
//   .then(({ data: excuse }) => {
//     document.getElementById('excuses').append(buildExcuse(excuse))
//     document.getElementById('excuse').value = ''
//   })
// })

// links for the navbar
