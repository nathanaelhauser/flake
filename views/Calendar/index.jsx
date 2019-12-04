const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Footer = require('../Footer')

module.exports = props =>{
    return (
        <Layout>
            <Navbar/>

            <Footer/>
            </Layout>
    )
}