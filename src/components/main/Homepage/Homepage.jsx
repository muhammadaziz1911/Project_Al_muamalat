import React from 'react'

import header_logo from "../../../assets/header_logo.png"
import logo_number from "../../../assets/logo_number.png"
import main_button from "../../../assets/main_button.png"
import main_person from "../../../assets/main_person.png"
import header_box1 from "../../../assets/header_box1.png"
import header_box2 from "../../../assets/header_box2.png"
import header_box3 from "../../../assets/header_box3.png"

import header_box4 from "../../../assets/header_box4.png"
import header_box5 from "../../../assets/header_box5.png"
import header_box6 from '../../../assets/header_box6.png'


import "./Homepage.css"
import { Link } from 'react-router-dom'



const Homepage = () => {
    return (
        <div>
            
            <div className="container">

                <div className="main_container">

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
                                <li>
                                    <Link className='contact_link' to="/Contact">Contact</Link>
                                </li>
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

                    <div className="main">

                        <div className="left_main">

                            <div className="main_header">

                                <h2>
                                    Seeking Knowledge is an Obligation in Islam
                                </h2>

                            </div>

                            <div className="text_main">

                                <h1>
                                    Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                                </h1>

                            </div>

                            <div className="main_button">

                                <img src={main_button} alt="students' option" />

                            </div>

                        </div>

                        <div className="right_main">

                            <div className="250k_img">

                                <img src={logo_number} alt="250k_students" />

                            </div>

                            <div className="boy_img">

                                <img src={main_person} alt="bc_boy_img" />

                            </div>

                        </div>

                    </div>

                    <div className="services">

                        <div className="main_services">

                            <h3>
                                Our services
                            </h3>

                            <p>
                                Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
                            </p>

                        </div>

                        <div className="services_box">

                            <div className="upper_box">

                                <div className="box1">

                                    <div className="header_box">

                                        <img src={header_box1} alt="img" />
                                        <h3>
                                            Islamic Fund Management
                                        </h3>

                                    </div>

                                    <p>
                                    We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                                <div className="box3">

                                    <div className="header_box">

                                        <img src={header_box2} alt="img" />
                                        <h3>
                                            International Relations
                                        </h3>

                                    </div>

                                    <p>
                                    We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                                <div className="box2">

                                    <div className="header_box">

                                        <img src={header_box3} alt="img" />
                                        <h3>
                                            Education and Training
                                        </h3>

                                    </div>

                                    <p>
                                    We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                            </div>

                            <div className="bottom_box">

                                <div className="box4">

                                    <div className="header_box">

                                        <img src={header_box4} alt="img" />
                                        <h3>
                                            For Islamic Banks
                                        </h3>

                                    </div>

                                    <p>
                                    We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                                <div className="box5">

                                    <div className="header_box">

                                        <img src={header_box5} alt="img" />
                                        <h3>
                                            Islamic Capital Market
                                        </h3>

                                    </div>

                                    <p>
                                    We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                                <div className="box6">

                                    <div className="header_box">

                                        <img src={header_box6} alt="img" />
                                        <h3>
                                            Shariah Compliance Audit
                                        </h3>

                                    </div>

                                    <p>
                                        We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.
                                    </p>

                                    <button type='submit'>
                                        Learn more
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* davomi bor... */}

                </div>

            </div>

        </div>
    )
}

export default Homepage