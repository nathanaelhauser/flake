const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Footer = require('../Footer')
const CalendarCard = require('../CalendarCard')

module.exports = props => {
  return (
    <Layout>
    <Navbar/>
      <br/>
      <div className="container">
        <h1>Events</h1>
      </div>
      <br/>
      <CalendarCard event="event"/>
    <br/>
            <Footer/>
            </Layout>
  )
}