const React = require('react')

module.exports = props => {
  return (
    <div id ="random" className="card card-cascade wider">
      <div className="view view-cascade gradient-card-header peach-gradient">
        <div className="row justify-content-center">
          <h2 className="card-header-title text-white">|| Generate Random Excuse ||</h2>
        </div>
      </div>
      <div className="card-body card-body-cascade text-center">
        <div id="randomForm" className="row justify-content-center">
          <div className="col">
            <div className="row justify-content-center">
              <form className="range-field my-4 w-25">
                <label htmlFor="severity">How intense of an excuse do you want?</label>
                <div className="row justify-content-between">
                  <div className="col-1 slider1" id="randomOne">1</div>
                  <div className="col-1 slider" id="randomTwo">2</div>
                  <div className="col-1 slider" id="randomThree">3</div>
                  <div className="col-1 slider" id="randomFour">4</div>
                  <div className="col-1 slider5" id="randomFive">5</div>
                </div>
                <input type="range" className="custom-range" min="1" max="5" id="randomSeverity" />
              </form>
            </div>
            <button className="btn peach-gradient" id="randomBtn">GENERATE</button>
          </div>
        </div>
        <div id="randomConfirm" className="row justify-content-center">
          <p id="randomExcuse"></p>
          <button className="btn peach-gradient">CONFIRM</button>
        </div>
      </div>
    </div>
  )
}