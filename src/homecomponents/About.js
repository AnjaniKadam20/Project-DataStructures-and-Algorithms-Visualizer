import React from 'react'
import GP from '../images/team/photo.jpg'
import GP1 from '../images/team/Photo2.jpeg'
import GP2 from '../images/team/Photo3.jpeg'
import Navbar from "./navbar";
import Footer from './Footer'
import './style.css'
const about = () => {
  return (

    
    
    <div>
        <Navbar/>
        <div className='about'>
        <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="d-flex  justify-content-center">


        <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200">
          <div className="content">
            <h3>Who am I</h3>
            <h2>Final-year BTech student @CCOEW, Pune.</h2>
            <p>
            As a senior BTech student specializing in Computer Engineering, I'm actively involved in advanced studies and practical projects, readying myself for a future career driving technological advancements.
            </p>

          </div>
        </div>


        <div className="col-lg-3 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={GP1} className="img-fluid" alt=""/>
              <div className="social">
              {/* https://www.linkedin.com/in/ghanashyam-patil-9b7280230 */}
              {/* https://www.github.com/patil-gm */}

                {/* <a href="" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a> */}
              </div>
            </div>

            <div className="member-info">
              <h4>Shruti Adhav</h4>
              <p>Currently in the concluding phase of my B. Tech program in Computer Engineering. I’m eager to apply my theoretical knowledge and practical expertise to solve complex problems within the tech industry.</p>
            </div>

          </div>
        </div>


      </div>
    </div>
        </div>


        <div className='about'>
        <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="d-flex  justify-content-center">


        <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200">
          <div className="content">
            <h3>Who am I</h3>
            <h2>Final-year BTech student @CCOEW, Pune.</h2>
            <p>
            As a senior BTech student specializing in Computer Engineering, I'm actively involved in advanced studies and practical projects, readying myself for a future career driving technological advancements.
            </p>

          </div>
        </div>


        <div className="col-lg-3 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={GP} className="img-fluid" alt=""/>
              <div className="social">
              {/* https://www.linkedin.com/in/ghanashyam-patil-9b7280230 */}
              {/* https://www.github.com/patil-gm */}
                

                {/* <a href="" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a> */}
              </div>
            </div>

            <div className="member-info">
              <h4>Anjani Kadam</h4>
              <p>Currently in the concluding phase of my B. Tech program in Computer Engineering. I’m eager to apply my theoretical knowledge and practical expertise to solve complex problems within the tech industry.</p>
            </div>

          </div>
        </div>


      </div>  
    </div>
        </div>

        <div className='about'>
        <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="d-flex  justify-content-center">


        <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200">
          <div className="content">
            <h3>Who am I</h3>
            <h2>Final-year BTech student @CCOEW, Pune..</h2>
            <p>
            As a senior BTech student specializing in Computer Engineering, I'm actively involved in advanced studies and practical projects, readying myself for a future career driving technological advancements.
            </p>

          </div>
        </div>


        <div className="col-lg-3 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={GP2} className="img-fluid" alt=""/>
              <div className="social">

              {/* https://www.linkedin.com/in/ghanashyam-patil-9b7280230 */}
              {/* https://www.github.com/patil-gm */}

                {/* <a href="" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a> */}
              </div>
            </div>

            <div className="member-info">
              <h4>Vaishnavi Gudulkar</h4>
              <p>Currently in the concluding phase of my B. Tech program in Computer Engineering. I’m eager to apply my theoretical knowledge and practical expertise to solve complex problems within the tech industry.</p>
            </div>

          </div>
        </div>


      </div>
    </div>
        </div>
    
    
    <Footer/>
    </div> 
  )
}

export default about