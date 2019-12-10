const React = require('react')

module.exports = props => {
  return (
    <nav className="navbar navbar-light navbar-1 peach-gradient">
      <a> <img className= "navimg" src= "../../assets/navimage.png" alt="Flake Logo"/> </a> 
      <a className="navbar-brand font-weight-bold" href="#">Flake</a>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span><i
          className="fas fa-bars fa-1x"></i></span></button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent15">


        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="homeLink nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="calendarLink nav-link" href="/Excuses">Excuses</a>
          </li>
          <li className="nav-item">
            <a className="excusesLink nav-link" href="/Calendar">Events</a>
          </li>
          <li className="nav-item">
            <a className="aboutLink nav-link" href="/About">About</a>
          </li>
          {/* Link to sign out of google account on local session. */}
          <li className="nav-item">
            <a id="signout" className="nav-link" href="#">Sign Out</a>
          </li>
        </ul>

      </div>

    </nav>

  )

}
