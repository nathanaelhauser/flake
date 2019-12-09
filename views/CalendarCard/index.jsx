const React = require(`react`)

module.exports = props => {
  return(
        <div className="container">
        <div className="card card-cascade wider">
            <div className="view view-cascade gradient-card-header peach-gradient">
                <h2 className="card-header-title mb-3">{props.event}</h2>
                    <p className="mb-0">{props.eventDate}</p>
            </div>
            <div className="card-body card-body-cascade text-center">
                <div id="eventList" className="list-group"></div>
            </div>
        </div>
    </div>
    
  )
}