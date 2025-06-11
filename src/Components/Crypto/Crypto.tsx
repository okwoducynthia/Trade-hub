import "./Crypto.css"

const Crypto = () => {
  return (
    <div>
      <section className="crypto-container">
        <div className="crypto-description">
          <h2>Cryptocurrency</h2>
          <p>
            Working with you to understand your life goals and develop a
            personalized wealth strategy. Today and for the years to come.
          </p>
          <ul>
            <li>401(k) Rollovers</li>
            <li>Wealth Accumulation Plans</li>
            <li>Financial Independence</li>
            <li>Diversification</li>
            <li>Passive Income Generation</li>
            <li>Global Accessibility</li>
          </ul>
          <button>Learn More</button>
        </div>

        <div className="crypto-sub">
          <div className="crypto-sub-heading">
            <h1>
              Bitcoin and Financial Freedom: Unlocking the Potential of
              Cryptocurrency
            </h1>
            <p>
              In the ever-evolving landscape of finance, cryptocurrency has
              emerged as a disruptive force with the potential to revolutionize
              the concept of financial freedom. Bitcoin, the pioneering
              cryptocurrency, has garnered significant attention as a means to
              achieve financial independence. In this article, we will explore
              the concept of cryptocurrency, with a specific focus on Bitcoin,
              and delve into why it can be a key to attaining financial freedom.
            </p>
          </div>

          <div className="crypto-image">
            <img src="images/bitcoin.jpg" alt="bitcoin image" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Crypto