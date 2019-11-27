const React = require ('react')
const Layout = require ('./Layout')
const Navbar = require('./Navbar')
const SignIn = require('./Signin')
module.exports = props => {
    return(
    <Layout>
    <Navbar/>
    <SignIn/>
    </Layout>
    )
}