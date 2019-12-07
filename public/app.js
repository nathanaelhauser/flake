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

  if (e.target.classList.contains("homeLink")) {
    window.location = `http://${window.location.host}/Home?google_id=${localStorage.getItem('google_id')}`
  }
  if (e.target.classList.contains("calendarLink")) {
    window.location = `http://${window.location.host}/Calendar?google_id=${localStorage.getItem('google_id')}`
  }
  if (e.target.classList.contains("excusesLink")) {
    window.location = `http://${window.location.host}/Excuses?google_id=${localStorage.getItem('google_id')}`
  }
  if (e.target.classList.contains("aboutLink")) {
    window.location = `http://${window.location.host}/About?google_id=${localStorage.getItem('google_id')}`
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
      <td className="item" data-id="${id}">
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
  axios.get('/Excuses')
    .then(excuses => {
      console.log(excuses)
    })
    .catch(e => console.error(e))
}
 document.getElementById("addExcuse").addEventListener("click", e => {
 e.preventDefault()
   axios.post('/Excuses', {
    excuse: document.getElementById('excuse').value,
     severity: document.getElementById('severity').value
  })
  .then(({ data: excuse }) => {
    document.getElementById('excuses').append(buildExcuse(excuse))
    document.getElementById('excuse').value = ''
  })
 })



 const prefabEx = [
   {
     level: 1 [
    "I have a cold",
    "I have a headache",
    "Im tired",
    "Im taking a mental health day",
    "I have food poisoning",
    "Im hungover",
    "I ate a burrito and now I cant move",
    "traffic is at a complete stop"]}
   ,{
     level: 2 [
      "I have a doctor appointment",
      "I have a dentist appointment",
      "I have diarrhea",
      "I have a toothache",
      "I'm waiting on a delivery I need to sign for"]}
    ,{
      level:3 [
        "my psychic told me I was going to die if I left the house today",
        "I threw out my back getting out of bed",
        "I'm having an allergic reaction",
        "I got poison ivy",
        "my bathroom flooded",
        "I'm afraid to be in vehicles when it rains"]
     },{
       level: 4 [
        "my car broke down",
        "my pet hamster died",
        "I'm being evicted",
        "I got in a car accident",
        "I'm getting a colonoscopy",
        "I'm depressed"]
     },{
       level: 5 [
      "my (family member) died",
      "I broke my (body part)",
      "I'm sitting in the back of a police car",
      "I was bitten by a wild animal at the zoo",
      " I'm having a family emergency",
      " I need to vote today and can't find my polling place"
       ]
     }
 ]
console.log (prefabEx)


