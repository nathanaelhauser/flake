const React = require('react')

module.exports = props => {
    return(
      <div className="card text-center">
        <div className="card-header peach-gradient h2">
          Add Excuse to Event
        </div>
        <div className="card-body text-center">
          <div className="row">
            <div className="col">
              <form className="text-center">
                <label htmlFor="newExcuse" className="active">What is your excuse?</label>
                <input type="text" id="newExcuse" className="form-control mdb-autocomplete mb-4"/>               
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
      </div>
    )
}