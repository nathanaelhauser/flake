const getExcuses = _ => {
  axios.get('/excuses/:userid')
    .then(excuses => {
      console.log(excuses)
    })
    .catch(e => console.error(e))
}

getExcuses()