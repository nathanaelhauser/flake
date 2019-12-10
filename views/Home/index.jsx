const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Footer = require('../Footer')

module.exports = props => {
  return (
   <Layout>
     <Navbar/>
     <div className= "container">
        <br/>
        {/* Use google username to greet client */}
        <h1 id="greeting">Hello {props.username | ''}! Let's plan your next flake!</h1>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-header peach-gradient h2">
                Make Your Flake!
              </div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yEcfsVHd-ff_EyYJV1P0WVDDHJuDBdqQUs6Zu4fux5u4F9vSww&s" alt="Card image cap" />
              <div className="card-body">
                <button className="btn peach-gradient" id="excuseBtn">Create Excuse</button>
                {/* <a href="/Excuses" className="excusesLink stretched-link">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-header peach-gradient h2">
                View Upcoming Flakes
              </div>
              <img className="card-img-top" src="https://images.idgesg.net/images/article/2019/04/google-calendar-android-100794956-large.jpg" alt="calpic" />

              <div className="card-body">
                <button className="btn peach-gradient" id="eventBtn">EVENTS</button>
                {/* <a href="/Calendar" className="calendarLink stretched-link">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      {/* Passing google_id to client using empty div */}
      <div id="tempStorage" data-google_id={props.google_id} data-username={props.username}></div>
      <script src="./home.js" />
      <Footer/>
    </Layout>

  )
}