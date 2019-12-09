const React = require('react')

module.exports = props => {
  return (
    <div id ="random" className="card text-center">
      <div className="card-header peach-gradient h2">
        Generate Random Excuse
      </div>       
      <div className="card-body text-center">
        <div id="randomForm" className="row">
          <div className="col">
            <form className="text-center">
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
            <button className="btn peach-gradient" id="randomBtn">GENERATE</button>
          </div>
        </div>
        <br/>
        <div id="randomConfirm" className="row justify-content-center">
          <p id="randomExcuse"></p>
          <button id="randomAdd" className="btn peach-gradient">ADD TO EVENT</button>
        </div>
      </div>
    </div>
  )
}