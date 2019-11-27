const React = require(`react`)

module.exports = props => {
  return(
    <div className="container">
      <div class="card card-cascade narrower">
        <div class="view view-cascade overlay">
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <div class="card-body card-body-cascade">
          <h5 class="orange-text pb-2 pt-1"><i class="fas fa-code"></i> {props.role}</h5>
          <h4 class="teal-text font-weight-bold card-title">{props.name}</h4>
          <p class="card-text">{props.excuse}</p>
          {/* <a class="btn btn-unique">Button</a> */}
        </div>
      </div>
    </div>
    
  )
}