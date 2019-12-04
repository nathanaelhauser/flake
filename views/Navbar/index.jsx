const React = require('react')

module.exports = props => {
  return(
    <nav className="navbar navbar-light navbar-1 peach-gradient">
    
      
      <a className="navbar-brand" href="#">Navbar</a>
    
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
    
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a id="calendarLink" className="nav-link" href="/calendar">Calender</a>
          </li>
          <li className="nav-item">
            <a id="excusesLink" className="nav-link" href="/excuses">Excuses</a>
          </li>
          <li className="nav-item">
            <a id="aboutLink" className="nav-link" href="/about">About</a>
          </li>
        </ul>
        
    
      </div>
      
    
    </nav>
  )  
}