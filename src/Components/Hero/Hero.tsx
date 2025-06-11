import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-details">
          <h1>Elizabeth Jane Ross, CIMA®</h1>
          <h3>
            Senior Vice President, Wealth Management, Financial Advisor, Family
            Wealth Advisor, International Client Advisor
          </h3>
          <i className="fa-solid fa-envelope"></i>
          <p><span>Direct: </span>(+1(432)246-4294)</p>
          <button>Contact Me</button>
        </div>
      </section>
    </div>
  )
}

export default Hero