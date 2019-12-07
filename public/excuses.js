document.getElementById('randomForm').style.display = 'block'
document.getElementById('randomConfirm').style.display = 'none'

document.querySelector('body').addEventListener('click', e => {

  if (e.target.id === 'randomBtn') {
    e.preventDefault()

    axios.get(`/excuses/${document.getElementById('randomSeverity').value}`)
      .then(({ data }) => {
        document.getElementById('randomConfirm').style.display = 'block'
        document.getElementById('randomExcuse').textContent = 
          data[Math.floor(Math.random()*(data.length-1))].excuse
      })
      .catch(e => console.log(e))
  }

  if (e.target.id === 'addBtn') {
    e.preventDefault()

    axios.post('/excuses', {
      severity: document.getElementById('addSeverity').value,
      excuse: document.getElementById('addExcuse').value
    })
      .then(() => {
        console.log('create excuse')
      })
      .catch(e => console.log(e))
  }

})