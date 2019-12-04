document.addEventListener('click', e => {
  console.log('click')
  if (e.target.id === "customBtn") {
    console.log('customBtn')
    const location = window.location.href.replace('/test', '')
    axios.post(`${location}/calendar_auth`, { location })
      .then(({ data }) => {
        window.location = data.authURL
      })
      .catch(e => console.error(e))
  }
})