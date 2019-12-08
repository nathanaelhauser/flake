const React = require('react')

module.exports = props => {
  return (
    <div id="random" className="card card-cascade wider">
      <div className="view view-cascade gradient-card-header peach-gradient">
        <div className="row justify-content-center">
          <h2 className="card-header-title text-white">|| Choose Event ||</h2>
        </div>
      </div>
      <div className="card-body card-body-cascade text-center">
        <div id="randomForm" className="row justify-content-center">
          <div className="col">
            <div className="row justify-content-center">
              <form className="range-field my-4 w-25">
                <div className="row">
                    <select id="selectCalendar" className="browser-default custom-select">
                      <option selected>Choose Calendar</option>
                    </select>
                    <br/>
                    <br/>
                    <select id="selectEvent" className="browser-default custom-select">
                      <option selected>Choose Event</option>
                    </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}