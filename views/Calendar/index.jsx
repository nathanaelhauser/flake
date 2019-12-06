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
      <div id ="main-container"className="container">
        <h1>Events</h1>
    
      <br/>
      <CalendarCard event="event"/>
    <br/>
      </div>
            <Footer/>
            </Layout>
            
  )
}