const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Form = require('../ExcuseForm')
const Footer = require('../Footer')

module.exports = props => {
    return(
        <Layout>
            <Navbar/>

        <Form/>  

<div className = "container">
<div class="list-group">
  <a href="#!" class="list-group-item list-group-item-action">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis deserunt possimus consectetur dicta exercitationem accusamus ratione quaerat rem, nobis pariatur expedita. Aspernatur nam eaque magnam esse nesciunt a asperiores.</a>
  <a href="#!" class="list-group-item list-group-item-action list-group-item-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero at consequatur iure similique animi quae fugit, esse repellendus temporibus libero beatae reprehenderit, perferendis nulla ea iste nesciunt optio quo.</a>
  <a href="#!" class="list-group-item list-group-item-action list-group-item-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id distinctio magni voluptatibus blanditiis nemo perspiciatis quas, deserunt adipisci cupiditate ipsam aperiam? Omnis cumque, ratione ipsam fuga maiores temporibus tempore beatae!</a>
  <a href="#!" class="list-group-item list-group-item-action list-group-item-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis quos, maiores, rerum eaque ducimus aut libero eligendi assumenda dolor iste nisi illo reprehenderit neque aperiam excepturi ipsam, sequi voluptatem?</a>
 <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium voluptatum ipsa exercitationem necessitatibus libero quod neque atque aliquam, magnam explicabo error vitae repellat sed, voluptatem accusantium provident labore et.</a> 
</div>
  </div> 
    <Footer/>
        </Layout>
    )
}
