import React from 'react'
import MainClock from './main_clock'
import Modal from '../modal/modal';

class MainPage extends React.Component {
 
  render() {
    return (
      <div className="landing-page">

        <Modal />

        <div className="top-session-btns">
          <div className="landing-left">
            <img className='landing-logo' src="https://emilyschromm.com/wp-content/themes/emfit/assets/footer/footer-logo-2x.png"/>
            <button
              className="top-session-btn"
              onClick={() => this.props.openModal("signup")}
              >
              Sign Up
            </button>
          </div>

          <button
            className="top-session-btn"
            onClick={() => this.props.openModal("login")}
          >
            Login
          </button>
        </div>

        <div className="landing-frame">
          <MainClock />
          <h1> Welcome to Mastery</h1>
          <h1 className='logo-text'>Time's Ticking.</h1>
        </div>
        <div className="landing-words">
          <p className="text-left">
            Study's suggest that it takes about <span id="bold">10,000</span>{" "}
            hours for a human to truly master any skill.
          </p>
          <img
            className="landing-img"
            src="https://mastery.s3.us-west-1.amazonaws.com/education.png"
          />
        </div>
        <p className="bottom-text">
          Mastery gives you the tools necessary to become a mastery at the skill
          or skills of your choice.
        </p>
        <div className="landing-end">
          <p className="closing-text">Time's still ticking. Get started today.</p>
          <div className="bottom-session-btns">
            <button
              className="bottom-session-btn"
              onClick={() => this.props.openModal("signup")}
            >
              Sign Up
            </button>

            <button
              className="bottom-session-btn"
              onClick={() => this.props.openModal("login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;