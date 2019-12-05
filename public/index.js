if (localStorage.getItem('google_id')) {
    console.log(`${window.location.host}/Home?google_id=${localStorage.getItem('google_id')}`)
    window.location = `http://${window.location.host}/Home?google_id=${localStorage.getItem('google_id')}`
}