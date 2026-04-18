import React from 'react'
import "./Contact.css"
import header_logo from "../../../assets/header_logo.png"
import { Link } from 'react-router-dom'
import cotact_girl from "../../../assets/contact_girl.png"
import logo_design from "../../../assets/logo_design.png"
import logos from "../../../assets/logos.png"
import Divider from "../../../assets/Divider.png"




const Contact = () => {
  return (
    <div>
      
      <div className="contact_main_container">

        <div className="contact_container">

          <div className="header">

            <div className="header_logo">

                <img src={header_logo} alt="header_logo" />

            </div>

            <div className="nav">

                <ul>
                    <li>Home</li>
                    <li>
                        <select name="Programs" id="programs_lang">
                            <option value="Programs">Programs</option>
                            <option value="Programs">Programs</option>
                            <option value="Programs">Programs</option>
                        </select>
                    </li>
                    <li>Finance tools</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div className="buttons">

                <div className="lang">
                    <select name="UZB" id="select_lang">
                        <option value="ENG">ENG</option>
                        <option value="UZB">UZB</option>
                    </select>
                </div>

                <div className="signin">
                    <button type='submit'>
                        <Link className='Signin' to="/Log_in_page">Sign in</Link>
                    </button>
                </div>

            </div>

        </div>

        <div className="profile_courses">

          <div className="boxes_profile">

          <div className="box1">
            <h3>
              Profile
            </h3>
          </div>

          <div className="box2">
            <h3>
              Courses
            </h3>
          </div>

          </div>

          <div className="alexa_box">

            <div className="header_alexa">

              <div className="img">

                <img src={cotact_girl} alt="alexa_img" />

                <h2>
                  Alexa Rawles
                </h2>

              </div>

              <div className="button_save">

                <button type='submit'>
                  Save
                </button>

              </div>

            </div>

            <div className="input_box1">

              <div className="firstname_input">

                <h3>
                  First Name
                </h3>

                <input type="name" placeholder='Your first name' />

              </div>

              <div className="lastname_input">

                <h3>
                  Last name
                </h3>

                <input type="name" placeholder='Your First Name' />

              </div>

            </div>

            {/* adress_input */}

            <div className="input_box2">

              <div className="firstname_input">

                <h3>
                  Adress
                </h3>

                <input type="name" placeholder='Enter Your Address' />

              </div>

              <div className="lastname_input">

                <h3>
                  Birthday
                </h3>

                <input type="number" placeholder='Enter Your Birthday' />

              </div>

            </div>

          </div>

        </div>

        <div className="contact_footer">

            <div className="door_design">

              <div className="main_img">

                <img src={logo_design} alt="door_design" />

              </div>

              <div className="links">

                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Contact Us</li>
                </ul>

              </div>

              <div className="logos">

                <img src={logos} alt="social_logos" />

              </div>

              <div className="divider">

                <img src={Divider} alt="divider" />

              </div>

              <h4>
                Copyright Satyam Studio
              </h4>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
