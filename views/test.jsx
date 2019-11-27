const React = require('react')
const Layout = require('./Layout')

module.exports = props => {
  return(
    <Layout>
      <h1>Hello World!</h1>
      <Button id="login-btn">
        Login
      </Button>
    </Layout>
  )
}