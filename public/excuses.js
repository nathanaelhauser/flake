document.getElementById('addExcuse').addEventListener('click', e => {
  e.preventDefault()
  const severity = document.getElementById('severity').value
  const excuse = document.getElementById('excuse').value
  if (severity && excuse) {
    axios.post('/excuses', { severity, excuse })
      .then()
      .catch(e => console.log(e))
  }
})