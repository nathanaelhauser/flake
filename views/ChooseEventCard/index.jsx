const React = require('react')

module.exports = props => {
  return (
    <div id="random" className="card text-center">
      <div className="card-header peach-gradient h2">
        Choose Event
      </div>
      <div className="card-body text-center">
        <div id="randomForm" className="row">
          <div className="col">
            <form className="text-center">
              <select id="selectCalendar" className="browser-default custom-select mb-4">
                <option selected>Choose Calendar</option>
              </select>
              <select id="selectEvent" className="browser-default custom-select">
                <option selected>Choose Event</option>
                </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}