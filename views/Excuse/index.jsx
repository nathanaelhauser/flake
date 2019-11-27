const React = require ('react')
const Layout = require ('./Layout')

module.exports = props => {
  return(
    <Layout>
      <div class="md-form">
  <input type="text" id="excuse" class="form-control mdb-autocomplete"/>>

  <label for="form-autocomplete" class="active">What is your excuse?</label>
</div>
    </Layout>
  )
}