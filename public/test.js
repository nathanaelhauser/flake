document.addEventListener('click', e => {
  console.log('click')
  if (e.target.id === "customBtn") {
    console.log('customBtn')
    window.location = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcalendar_events"
  }
})