if (localStorage.getItem('google_id')) {
    window.location = `/Home`
}

// signin button clicked
document.getElementById('signin').addEventListener('click', e => {    
    // Get google authorization URL from back end
    axios.get('/google/auth')
        // Go to authorization URL
      .then(({ data }) => window.location = data)
      .catch(e => console.error(e))
})