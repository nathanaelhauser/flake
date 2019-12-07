const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Form = require('../ExcuseForm')
const Footer = require('../Footer')
const AddEvent = require('../AddEvent')

module.exports = props => {
    return (
        <Layout>
            <Navbar />

            <Form />
        <br/>
            <div className="container">
                <div className="list-group">
                    {/* no excuse */}
                    <a href="#" className="list-group-item list-group-item-action">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis deserunt possimus consectetur dicta exercitationem accusamus ratione quaerat rem, nobis pariatur expedita. Aspernatur nam eaque magnam esse nesciunt a asperiores.</a>
                    {/* severity 1 or 2 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero at consequatur iure similique animi quae fugit, esse repellendus temporibus libero beatae reprehenderit, perferendis nulla ea iste nesciunt optio quo.</a>
                    {/* severity 3 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis quos, maiores, rerum eaque ducimus aut libero eligendi assumenda dolor iste nisi illo reprehenderit neque aperiam excepturi ipsam, sequi voluptatem?</a>
                    {/* severity 4 or 5 */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium voluptatum ipsa exercitationem necessitatibus libero quod neque atque aliquam, magnam explicabo error vitae repellat sed, voluptatem accusantium provident labore et.</a>
                </div>
            </div>
              <br/>
            <Footer />
            <script src="./excuses.js"></script>
        </Layout>
    )
}
