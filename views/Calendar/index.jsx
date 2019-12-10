const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Footer = require('../Footer')
const CalendarCard = require('../CalendarCard')

module.exports = props => {
  return (
    
    <Layout>

      <Navbar />
      <br />
      <div className="container">
        <p className="text-center h1">Events</p>
      </div>
      <br />
      <CalendarCard id="calendarCard" event="Event" />
      <br />
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" />
      <script src="./calendar.js" />
    </Layout>
  )
}