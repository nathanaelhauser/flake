const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')

module.exports = props =>{
    return( 
        <Layout>
            <Navbar/>
            <div className = "container">
<h1>Hello!${} What would You like to do today?</h1> 
<div className = "row">
<div className="col-md-6"><div className="card">
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yEcfsVHd-ff_EyYJV1P0WVDDHJuDBdqQUs6Zu4fux5u4F9vSww&s" alt="Card image cap"/>

  <div className="card-body">
    <h5 className="card-title">Create Excuse</h5>
    <a href="http://localhost:3009/Excuses" className="stretched-link">Go somewhere</a>
  </div>
</div></div>
    <div className="col-md-6"><div className="card">
  <img className="card-img-top" src="https://images.idgesg.net/images/article/2019/04/google-calendar-android-100794956-large.jpg" alt="calpic"/>

  <div className="card-body">
    <h5 className="card-title">View Upcoming Events</h5>

    <a href="http://localhost:3009/Calendar" className="stretched-link">Go somewhere</a>
  </div>
</div></div>

</div>
        </div>
        </Layout>

    )
}