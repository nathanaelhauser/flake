const React = require('react')

module.exports = props => {
  return (
    <div className="container">
      
    <div className="row">
    <h1 className="excuseHeader">Add an Excuse</h1>
    </div>

    <form>
    <div className="md-form">
      <input type="text" id="excuse" className="form-control mdb-autocomplete"/>
      <label htmlFor="excuse" className="active">What is your excuse?</label>
    </div>

    <form className="range-field my-4 w-25">
    <label htmlFor="severity">How intense is your excuse?</label>
    <div className="row justify-content-between">
      <div className="col-1 slider">1</div>
      <div className="col-1 slider">2</div>
      <div className="col-1 slider">3</div>
      <div className="col-1 slider">4</div>
      <div className="col-1 slider">5</div>
    </div>
    <input type="range" className="custom-range" min="1" max="5" id="severity"/>
    </form>
    <button className="btn peach-gradient" id="addExcuse">Add Excuse</button>
    </form>


    <div className="row">
      <table>
        <thead>
          <th>Excuses</th>
          <th></th>
        </thead>
        <tbody id="excuses">
        </tbody>
      </table>
    </div>   
 
</div>
  )
}