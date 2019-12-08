const React = require('react')

module.exports = props => {
    return(
        <div className="card card-cascade wider">
      <div className="view view-cascade gradient-card-header peach-gradient">
        <div className="row justify-content-center">
          <h2 className="card-header-title text-white">|| Add Excuse to Event ||</h2>
        </div>
      </div>
      <div className="card-body card-body-cascade text-center">
        <div className="row justify-content-center">
          <form className="range-field my-4 w-25">
          <div className="md-form">
          <input type="text" id="newExcuse" className="form-control mdb-autocomplete" />
          <label htmlFor="newExcuse" className="active">What is your excuse?</label>
        </div>
        <br/>
            <label htmlFor="severity">How intense is your excuse?</label>
            <div className="row justify-content-between">
              <div className="col-1 slider1">1</div>
              <div className="col-1 slider">2</div>
              <div className="col-1 slider">3</div>
              <div className="col-1 slider">4</div>
              <div className="col-1 slider5">5</div>
            </div>
            <input type="range" className="custom-range" min="1" max="5" id="newSeverity" />
            <button className="btn peach-gradient" id="addBtn">ADD TO EVENT</button>
          </form>
        </div>
      </div>
    </div>
    )
}