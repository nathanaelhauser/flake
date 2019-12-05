if (localStorage.getItem('google_id')) {
    window.location = `/Home/${localStorage.getItem('google_id')}`
}