const React = require('react')
const Layout = require('./Layout2')

module.exports = props => {
  return (
    <Layout>
      <div id="index-container" className="container d-flex peach-gradient">
        <div className="card align-middle">
          <img id="index-logo" className="card-img-top" src="./assets/logo_index.png" alt="logo" />
          <div className="card-body text-center">
            <button id="signin" type="button" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i> Google +</button>
          </div>
        </div>
      </div>
      <script src="./index.js" />
    </Layout>

  )
}