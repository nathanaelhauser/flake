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
        <div className="row justify-content-center">
          <form className="range-field my-4 w-25">
            <label className="random" htmlFor="severity">How intense of an excuse do you want?</label>
            <div className="random row justify-content-between">
              <div className="col-1 slider1" id="randomOne">1</div>
              <div className="col-1 slider" id="randomTwo">2</div>
              <div className="col-1 slider" id="randomThree">3</div>
              <div className="col-1 slider" id="randomFour">4</div>
              <div className="col-1 slider5" id="randomFive">5</div>
            </div>
            <input type="range" className="random custom-range" min="1" max="5" id="randomSeverity" />
            <button className="btn peach-gradient" id="randomBtn">GENERATE</button>
          </form>
        </div>
      </div>
    </div>
  )
}