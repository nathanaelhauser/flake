const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Form = require('../ExcuseForm')
module.exports = props =>{
    return(
        <Layout>
            <Navbar/>

        <Form/>   
        </Layout>
    )
}
