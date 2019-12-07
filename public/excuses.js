document.getElementById('randomForm').style.display = 'block'
document.getElementById('randomConfirm').style.display = 'none'

document.querySelector('body').addEventListener('click', e => {

  if (e.target.id === 'randomBtn') {
    e.preventDefault()
    console.log('hello')
    // document.getElementById('randomForm').style.display = 'none'
    // document.getElementById('randomConfirm').style.display = 'block'

    const severity = document.getElementById('randomSeverity').value

    axios.get(`/excuses/${severity}`)
      .then(excuses => {
        console.log(excuses)
      })
      .catch(e => console.log(e))
  }

})