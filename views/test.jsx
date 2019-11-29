const React = require('react')
const Layout = require('./Layout')

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
        <script src="https://apis.google.com/js/api:client.js"></script>
        <link rel="stylesheet" href="./test.css" />
      </head>
      <body>
        <div id="gSignInWrapper">
          <span className="label">Sign in with:</span>
          <div id="customBtn" className="customGPlusSignIn">
            <span className="icon"></span>
            <span className="buttonText">Google</span>
          </div>
        </div>
        <div id="name"></div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="./test2.js"></script>
      </body>
    </html>

  )
}