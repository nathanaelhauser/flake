// If user isn't logged in yet,
//  get google_id  and username
// in div on Home page
if (!localStorage.getItem('google_id')) {
  const data = document.getElementById('tempStorage').dataset
  localStorage.setItem('google_id', data.google_id)
  localStorage.setItem('username', data.username)
}

document.getElementById('greeting').textContent = `Hello ${localStorage.getItem('username')}! Let's plan your next flake!`

// event listener for Excuses and Events buttons
document.addEventListener(`click`, e => {
  if (e.target.id === `excuseBtn`) {
    location.href = `/Excuses`
  } else if (e.target.id === `eventBtn`) {
    location.href = `/Calendar`
  }
})

