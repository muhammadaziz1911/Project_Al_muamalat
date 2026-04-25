import React from 'react'
import "./Log_in_page.css"
import header_al_muamala from "../../../assets/header_al_muamala.png"
import { IoMailOutline } from "react-icons/io5";
import right_container_img2 from "../../../assets/right_container_img2.png"
import { Link } from 'react-router-dom'


const Log_in_page = () => {
  return (
    <div>
      
      <div className="main_container">

        <div className="container1">

          <div className="left_container">

            <div className="header">

              <img src={header_al_muamala} alt="img" />

            </div>

            <div className="main_login">

              <h2>
                GET STARTED
              </h2>

              <div className="inputs">

                <div className="input_box">
                  <input type="email" placeholder="Enter your email" />
                  <span className="icon"><IoMailOutline /></span>
                </div>

                <div className="password_input">

                  <input type="password" placeholder="Password" />

                </div>

                <div className="button_signin">

                  <button type='submit'>
                    Sign in
                  </button>

                </div>

                <h3>
                  <Link className="Register" to="/Register">
                    Create new account
                  </Link>
                </h3>

              </div>

            </div>

          </div>

          <div className="right_container">

            <div className="img1">

              <img src={right_container_img2} alt="img" />

            </div>

            <div className="welcome_text">

              <h3>
                Welcome to Al Muamalat - Empowering Your Journey in Islamic Finance
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Log_in_page
