const React = require(`react`)

module.exports = props => {
  return(
        <div className="container">
        <div className="card text-center">
            <div className="card-header peach-gradient h2">
                {props.event}
                <p className="mb-0">{props.eventDate}</p>
            </div>
            <div className="card-body card-body-cascade text-center">
                <div id="eventList" className="list-group"></div>
            </div>
        </div>
    </div>
    
  )
}