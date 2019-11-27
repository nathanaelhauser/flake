const React = require('react')

module.exports = props => {
  return (
    <div className="container">

    <form>
      <p>
        <h3>What're ya flakin' out on?</h3>  
        <label htmlFor="event">Event type: </label>
        <br/>
        <input type="text" name="event" id="event" />
      </p>
      <p>
        <label htmlFor="date">Date: </label>
        <br/>
        <input type="date" name="date" id="date" />
      </p>
      <p>
        {/* pretty button */}
        <button class="btn peach-gradient" id="addEvent">DITCH IT</button>
      </p>
    </form>
</div>
  )
}