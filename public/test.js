// const CLIENT_ID = '116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com'
// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
// const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
// let redirect_uri = `${window.location.href}/calendar_events`

// let script = document.createElement('script')
// let scriptLoaded = false
// script.src = "https://apis.google.com/js/api.js"
// document.querySelector('body').appendChild(script)
// document.addEventListener('readystatechange', e => {
//   if (document.readyState === 'complete' && !scriptLoaded) {
//     gapi.load('auth2', () => {
//       gapi.auth2.init({
//         client_id: CLIENT_ID,
//         cookie_policy: 'single_host_origin',
//         scope: SCOPES,
//         redirect_uri
//       })
//         .then(GoogleAuth => {
//           console.log(GoogleAuth)
//           const authURL = GoogleAuth.generateAuthUrl({ access_type: 'offline' })
//           console.log(authURL)
//         })
//         .catch(e => console.error(e))
//     })
//   }
// })

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

