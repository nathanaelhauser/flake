const React = require('react')

module.exports = props => {
  return (
    // <html lang="en">
    //   <head>
    //     <meta charSet="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="google-signin-scope" content="profile email" />
    //     <meta name="google-signin-client_id" content="116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com" />
    //     <script src="https://apis.google.com/js/platform.js" async defer></script>
    //     <title>Document</title>
    //   </head>
    //   <body>
    //     <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" ></div>
    //     <script src="./test.js"></script>
    //   </body>
    // </html>
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
        {/* <script src="https://apis.google.com/js/api:client.js"></script> */}
        <link rel="stylesheet" href="./test.css" />
      </head>
      <body>
        <div id="customBtn">
          <img src="https://img.icons8.com/clouds/100/000000/google-logo.png" id="google-icon" />
          <span className="buttonText">Google</span>
        </div>
        <div id="name"></div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="./test.js"></script>
      </body>
    </html>

  )
}