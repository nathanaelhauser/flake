const React = require ('react')
const Layout = require ('./Layout2')
const Footer= require('./Footer')
module.exports = props => {
    return(
      <Layout>

         <button  id = "customBtn" type="button" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i> Google +</button>
<Footer/>
      </Layout>

    )
}