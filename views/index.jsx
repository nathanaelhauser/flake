const React = require ('react')
const Layout = require ('./Layout2')

module.exports = props => {
    return(
      <Layout>

         <button  id = "customBtn" type="button" class="btn btn-gplus"><i class="fab fa-google-plus-g pr-1"></i> Google +</button>

      </Layout>

    )
}