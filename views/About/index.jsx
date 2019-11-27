const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
module.exports = props => {
  return (
    <Layout>
    <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Be a Flaker!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quisquam accusamus recusandae, expedita omnis nostrum et. Sequi temporibus reiciendis deleniti tempore esse, corporis aliquam, delectus veritatis eligendi cupiditate quasi ipsum.</p>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}