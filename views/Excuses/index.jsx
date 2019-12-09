const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Form = require('../excuseForm')
const Footer = require('../Footer')
const AddEvent = require('../AddEvent')
const RandomModal = require('../RandomModal')

module.exports = props => {
    return (
        <Layout>
            <Navbar />

            <Form />
        <br/>
            <div className="container">
                <div className="list-group">
                    {/* no excuse */}
                    <a href="#" className="list-group-item list-group-item-action">{props.excuse}</a>
                    {/* severity 1 or 2 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">{props.excuse}</a>
                    {/* severity 3 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">{props.excuse}</a>
                    {/* severity 4 or 5 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">{props.excuse}</a>
                </div>
            </div>
            <RandomModal />
              <br/>
            <Footer />
            <script src="./excuses.js"></script>
        </Layout>
    )
}
