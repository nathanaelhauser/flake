const React = require ('react')
const Layout = require ('./Layout')


module.exports = props => {
    return(
    <Layout>
<nav class="navbar navbar-light navbar-1 white">
    
      
    <a class="navbar-brand" href="#">Flake</a>
  
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
      aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent15">
  
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Calendar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Excuses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about">About</a>
        </li>
      </ul>
      
  
    </div>
    
  
  </nav>

<div class="dropdown-menu">
  <form className="px-4 py-3">
    <div className="form-group">
      <label htmlFor="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">Feeling Flakey? Sign up</a>
  <a className="dropdown-item" href="#">Forgot password?</a>
</div>
    </Layout>
    )
}