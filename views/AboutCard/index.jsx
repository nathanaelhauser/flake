const React = require(`react`)

module.exports = props => {
  return(
    <div id ="add" className="container">
      <div className="card card-cascade narrower">
        <div className="view view-cascade overlay">
          <img className="card-img-top" src={props.image} alt="Card image cap" />
          <a>
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>
        <div className="card-body card-body-cascade">
          <h5 className="orange-text pb-2 pt-1"><i className="fas fa-code"></i> {props.role}</h5>
          <h4 className="teal-text font-weight-bold card-title">{props.name}</h4>
          <p className="card-text">{props.excuse}</p>
          {/* <a class="btn btn-unique">Button</a> */}
        </div>
      </div>
    </div>
    
  )
}