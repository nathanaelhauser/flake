document.addEventListener('click', e => {
    console.log('click')
    if (e.target.id === "customBtn") {
      console.log('customBtn')
      const location = window.location.href.replace('#', '')
      axios.post(`${location}calendar_auth`, { location })
        .then(({ data }) => {
          window.location = data.authURL
        })
        .catch(e => console.error(e))
    }
  })


const buildExcuse = ({id, excuse, severity}) => {
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

//for the signIN modal
document.getElementById('signin').addEventListener('click', e =>{
    document.querySelector('signInModal').style.display= "flex"
}) 


