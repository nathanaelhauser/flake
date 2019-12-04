const React = require('react')

module.exports = props => {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
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