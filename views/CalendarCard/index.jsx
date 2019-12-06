const React = require(`react`)

module.exports = props => {
  return(
        <div className="container">
        <div class="card card-cascade wider">
            <div class="view view-cascade gradient-card-header peach-gradient">
                <h2 class="card-header-title mb-3">{props.event}</h2>
                    <p class="mb-0">{props.eventDate}</p>
            </div>
            <div className="card-body card-body-cascade text-center">
                <p className="card-text">{props.excuse}</p>
                {
                    
                }
                <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
                <h5 class="waves-effect waves-light">Add an excuse<i class="fas fa-angle-double-right ml-2"></i></h5>
                </a>
            </div>
        </div>
        </div>
  )
}