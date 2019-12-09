const React = require('react')
const RandomExcuseCard = require('../RandomExcuseCard')
const AddEvent = require('../AddEvent')
const ChooseEventCard = require('../ChooseEventCard')

module.exports = props => {
  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <p className="excuseHeader text-center h1 mb-4">EXCUSES</p>
        </div>
        
      </div>
      <ChooseEventCard />
      <br/>
      <RandomExcuseCard />
      <br/>
      <AddEvent/>

      <div className="row">
        <div className="col">
          <p className="text-center h2 mt-4">Recent Excuses</p>

          {/* <table>
            <thead>
              <th className="text-center h2 mb-4">Recent Excuses</th>
              <br/><br/>
              <th></th>
            </thead>
            <tbody id="excuses">
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  )
}