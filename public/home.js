// If user isn't logged in yet,
//  grab google_id provided by
// server on Home page in div dataset
if (!localStorage.getItem('google_id')) {
  const google_id = document.getElementById('tempStorage').dataset.google_id
  localStorage.setItem('google_id', google_id)
}