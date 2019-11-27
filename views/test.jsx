const React = require('react')
const Layout = require('./Layout')

module.exports = props => {
  return (
    <Layout title="Nathan" description="lorem" imageUrl>
      <h1>Hello World!</h1>
      <button id="authorize-button" style={{display: 'none'}}>Authorize</button>
      <button id="signout-button" style={{display: 'none'}}>Sign Out</button>

      <pre id="content" style={{whiteSpace: 'pre-wrap'}}></pre>

      <script src="https://apis.google.com/js/api.js"></script>
      <script src="./test.js"></script>
      <script async defer src="https://apis.google.com/js/api.js">
        { 
          window.onload = function () {
            this.onload = function() {}
            this.handleClientLoad()
          }
          document.addEvent
        }
    </script>
    </Layout>

  )
}