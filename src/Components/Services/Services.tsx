import React from 'react'
import "./Services.css"

const Services = () => {

  const buttonParagraph = document.getElementById('button-paragraph');


function mytext(event: React.MouseEvent<HTMLButtonElement>) {
  if (buttonParagraph) {
    buttonParagraph.style.maxHeight = "220px";
  }

  event.preventDefault();
}

  return (
    <div>
      <section className='service-section'>
        <div className="service-container">
          <div className="service-heading">
            <p>My Story and Services</p>
            <p>Client Service Team</p>
            <p>Location</p>
          </div>

          <h4></h4>

          <div className="services-description">
            <div className="services-paragraph">
              <h2>My Story and Services</h2>
              <video src="images/video-1.mp4" controls></video>
              <p id="button-paragraph">
                My goal is to thoroughly understand your financial needs and
                then align the resources to help you meet or exceed them. I can
                help you evaluate near-term concerns and plan for long-term
                goals, be a sounding board for investment ideas, assist you in
                developing and executing a strategy that is precisely your own
                and helps you meet your needs. Elizabeth Jane Ross:"As a
                seasoned business professional with expertise in business
                development, performance management, and book management, I
                leverage my skills to drive growth and retention at E*TRADE from
                Morgan Stanley. With a strong educational background and recent
                certifications (SIE, Series 7, and Series 63), I am passionate
                about my work and eager to connect with other managers and
                collaborators to explore new opportunities."
              </p>
              <button onClick={mytext}>
                <a href=""
                  >About me ) read more
                  <i className="fa-solid fa-angle-down"></i>
                </a>
              </button>
            </div>

            <div className="services-list">
              <h3>Services Include</h3>
              <ul>
                <li>Wealth Management</li>
                <li>Retirement Planning</li>
                <li>Business Planning</li>
                <li>401(k) Rollovers</li>
                <li>Trust Services</li>
                <li>Sustainable Investing</li>
                <li>529 Plans</li>
                <li>Corporate Retirement Plans</li>
              </ul>
            </div>
          </div>

          <div className="service-conclusion">
            <h5>
              Securities Agent: DC, WI, WA, VT, VA, UT, TX, TN, SC, RI, OH, NY,
              NJ, NC, MI, MD, MA, LA, KY, KS, GA, FL, CO, CA, AZ, OR; General
              Securities Representative; Investment Advisor Representative
              NMLS#: 841426
            </h5>
            <h3></h3>
            <p>
              Check the background of Our Firm and Investment Professionals on
              <span>FINRA's BrokerCheck</span>*
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services