import React from 'react'
/*import image from '../images/casual-life-3d-reading.png'8*/
import image from '../images/BG-1.png'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div> 
   {/* 
   -------------------------------------------------    main poster ---------------------------------------------------------------
   */}
<section id="hero" class="hero d-flex align-items-center ">
<div class="container">
  <div class="row">
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <h1 className="heading" data-aos="fade-up">Engaging Visual Representation of Complex Data structures and Algorithms</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">Making it highly advantageous for all individuals to learn  🚀</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        {/* <div class="text-center text-lg-start">
          <a href="#" class="getstarted btn1 scrollto btn btn-tertiary">
            <span className=''>Get Started</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div> */}
      </div>
    </div>
    <div class="col-md-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img  src={image} class="img-fluid" alt=""/>
    </div>
  </div>
</div>
</section>


  {/* 
  *******---------------------------------- header ---------------------------------2************ 
  */}
    
    <div className="header navbar navbar-default navbar-fixed-top fixed-top ">
    <div className="container-fluid d-flex align-items-center justify-content-between "> 
    
    <div  className="logo d-flex align-items-center ">
    
    <img className='brand ' src={image} alt="" /> 
    
    {/* <span>Algorithm Visualizer</span>  */}
    
    </div>    
    
    <nav id="navbar1" className="navbar "> 
    
    <ul className='list-group list-group-horizontal navbar '> 
    <Link style={{textDecoration:"none"}} to="/about">
    <li className='nav-item'> <a className="nav-link  scrollto" href="#about"> About </a> </li> 
    </Link>
    <li className='nav-item'> </li> 
    {/* https://github.com/patil-gm */}
    <li className='nav-item'> <a className="getstarted  scrollto btn btn-tertiary" target="__blank" href="" > Contact Me </a> </li> 
    </ul> 
      <i className="bi bi-list mobile-nav-toggle"></i> 
    </nav> 
    </div>

    </div>
   {/* ******* header end ************ */}

  </div>
  )
}

export default Banner