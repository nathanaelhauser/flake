const React = require('react')

module.exports = props => {
  return (
    <div className="container">

      <div className="row">
        <h1 className="excuseHeader"> EXCUSES</h1>
      </div>

      <form>
        <p>
          <h4>|| Generate random excuse ||</h4>
          <button className="btn peach-gradient" id="randomBtn">GENERATE</button>
        </p>

        <hr/> 

          <h4>|| Add an excuse to an event ||</h4>
        <div className="md-form">
          <input type="text" id="excuse" className="form-control mdb-autocomplete" />
          <label htmlFor="excuse" className="active">What is your excuse?</label>
        </div>

        <form className="range-field my-4 w-25">
          <label htmlFor="severity">How intense is your excuse?</label>
          <div className="row justify-content-between">
            <div className="col-1 slider1" id="oneIntense">1</div>
            <div className="col-1 slider" id="twoIntense">2</div>
            <div className="col-1 slider" id="threeIntense">3</div>
            <div className="col-1 slider" id="fourIntense">4</div>
            <div className="col-1 slider5" id="fiveIntense">5</div>
          </div>
          <input type="range" className="custom-range" min="1" max="5" id="severity" />
        </form>
        <button className="btn peach-gradient" id="addExcuse">Add excuse to an event</button>
      </form>

      <hr/>

      <div className="row">
        <div>
        <table>
          <thead>
            <th>Recent excuses</th>
            <br/><br/>
            <th></th>
          </thead>
          <tbody id="excuses">
          </tbody>
        </table>
        </div>
      </div>

    </div>
  )
}