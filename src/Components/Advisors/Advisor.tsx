import "./Advisor.css"

const Advisor = () => {
  return (
    <div>
      <section className="advisor-section">
        <h1>Advisor Brokerage Details</h1>

        <div className="advisor-container">
          <div>
            <span className="camera-icon">
              <i className="fa-solid fa-camera-retro"></i>
            </span>
            <h1>$49 Billion</h1>
            <p>Average Assets Under Management</p>
          </div>

          <div>
            <span className="briefcase-icon">
              <i className="fa-solid fa-briefcase"></i>
            </span>
            <h1>$5 million</h1>
            <p>Average Account Size</p>
          </div>

          <div>
            <span className="users-icon">
              <i className="fa-solid fa-users"></i>
            </span>
            <h1>821,000</h1>
            <p>Total Number of Accounts</p>
          </div>
        </div>

        <h4 className="empty-div"></h4>
        <div className="advisor-details">
          <p>Ready to start a conversation? Contact Elizabeth Ross today.</p>
          <button>Contact Me</button>
        </div>
        <h4 className="empty-div"></h4>
      </section>
    </div>
  )
}

export default Advisor