const React = require ('react')
const Layout = require ('./Layout')
const Navbar = require('./Navbar')
const SignIn = require('./SignIn')
module.exports = props => {
    return(
    <Layout>
    <img src= "https://files.slack.com/files-pri/TKAFG5QD9-FR0A109TN/flakelogo.png"></img>
    
    <button  id = "customBtn" type="button" class="btn btn-gplus"><i class="fab fa-google-plus-g pr-1"></i> Google +</button>
    </Layout>
    )
}