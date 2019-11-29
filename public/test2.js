var googleUser = {};
var startApp = function () {
  gapi.load('auth2', function () {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
      access_type: 'offline',
      prompt: 'consent'
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
    function (googleUser) {
      document.getElementById('name').innerText = "Signed in: " +
        googleUser.getBasicProfile().getName();
      console.log(googleUser.getAuthResponse())
      console.log(googleUser.isSignedIn())
      console.log(googleUser)
      
    }, function (error) {
      alert(JSON.stringify(error, undefined, 2));
    });
}

startApp()