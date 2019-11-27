const React = require('react')

module.exports = props => {
  return (
    <div className="container">

    <form>
      <p>
        <h3> Hello! What are we skipping today?</h3>  
        <label htmlFor="event">Event type:</label>
        <input type="text" name="event" id="event" />
      </p>
      <p>
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" />
      </p>
      <p>
        <button id="addEvent">submit</button>
      </p>
    </form>
</div>
  )
}