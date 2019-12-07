const React = require('react')

module.exports = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><a>{props.summary}</a></h4>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  )
}