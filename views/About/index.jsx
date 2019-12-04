const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const AboutCard = require('../AboutCard')
const Footer = require('../Footer')
module.exports = props => {
  return (
    <Layout>
    <Navbar/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>What is Flake?</h1>
            <p>Flake is an app that helps you live your life the way you want to. If you're tired and can't function, but you have a family event, if you are scheduled to work and there is a once in a life time opportunity you can't miss out on. That's what Flake is for. Flake helps you generate an excuse, keeps track of the excuses you used, and which events you use the excuse for, that way you aren't getting your stories mixed up and you know what you've used.</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Meet The Flakey Team</h1>
          </div>
        </div>
      </div>
      <AboutCard name="Nathan" excuse="Yea...about dinner, it's raining...so I'm gonna pass." image="https://ca.slack-edge.com/TKAFG5QD9-ULXR8AFUZ-c9a095d1d510-512" role="GitHub Master"/>
    <br/>
      <AboutCard name="Mercedes" excuse="Sorry I can't make it. I ate a breakfast burrito and now I can't move." image="https://ca.slack-edge.com/TKAFG5QD9-ULY02C8P8-3d1863e1b1ef-512" role="Backend Dev"/>
    <br/>
      <AboutCard name="Maverick" excuse="Bro, Uber Surge Pricing is like 4.6x right now.  Can't make it." image="https://ca.slack-edge.com/TKAFG5QD9-ULJEQ5WAX-03a5b4778309-512" role="Backend Dev"/>
    <br/>
      <AboutCard name="Arturo" excuse="Sorry I have to cancel... I'm too depressed about the state of the world to go out." image="https://ca.slack-edge.com/TKAFG5QD9-ULMK37M6G-f205369b1b63-512" role="Frontend Dev"/>
    <br/>
      <AboutCard name="Kevin" excuse="My dog, cat, and I are all throwing up right now!" image="https://ca.slack-edge.com/TKAFG5QD9-ULPF1509X-39abf41164e2-512" role="Frontend Dev"/>

    <Footer/>

    </Layout>
    
  )
}