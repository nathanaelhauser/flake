const React = require('./node_modules/react')
const RandomExcuseCard = require('../RandomExcuseCard')
const AddEvent = require('../AddEvent')

module.exports = props => {
  return (
    <div className="container">

      <div className="row">
        <h1 className="excuseHeader"> EXCUSES</h1>
      </div>
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