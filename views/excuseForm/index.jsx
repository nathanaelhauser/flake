const React = require('react')
const RandomExcuseCard = require('../RandomExcuseCard')
const AddEvent = require('../AddEvent')
const ChooseEventCard = require('../ChooseEventCard')

module.exports = props => {
  return (
    <div className="container">

      <div className="row">
        <h1 className="excuseHeader"> EXCUSES</h1>
      </div>
      <ChooseEventCard />
      <br/>
      <RandomExcuseCard />
      <br/>
      <AddEvent/>

      <div className="row">
        <div>
        <table>
          <thead>
            <th>Recent excuses</th>
            <br/><br/>
            <th></th>
          </thead>
          <tbody id="excuses">
          </tbody>
        </table>
        </div>
      </div>

    </div>
  )
}