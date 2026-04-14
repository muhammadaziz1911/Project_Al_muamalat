import React from 'react'
import header_al_muamala from "../../../assets/header_al_muamala.png"
import { FiUser } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import right_container_img2 from "../../../assets/right_container_img2.png"
import "./Register.css"

const Register = () => {
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
      
                      <div class="input_box">
                        <input type="text" placeholder="Enter your name" />
                        <span class="icon"><FiUser /></span>
                      </div>
      
                      <div className="password_input">
      
                        <input type="email" placeholder="Enter your email" />
                        <span className='icon_password'><IoMailOutline /></span>
      
                      </div>

                      <div className="select_country">

                        <select name="flag_drop" id="flag_drop">
                          <option value="UZBEKISTAN"> UZBEKISTAN</option>
                          <option value="UZBEKISTAN">UZBEKISTAN</option>
                        </select>

                      </div>
      
                      <div className="button_signin">
      
                        <button type='submit'>Log in</button>
      
                      </div>

                      
      
      
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

export default Register
