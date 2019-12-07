document.getElementById('randomBtn').addEventListener('click', e => {
  e.preventDefault()
  
  axios.get('/excuses')
})