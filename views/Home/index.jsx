const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const SignIn = require('../SignIn')

module.exports = props =>{
    return( 
        <Layout>
            <Navbar/>
            <SignIn/>
        </Layout>

    )
}