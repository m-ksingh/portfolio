import React from 'react'
import "../Css/header.css"
import resume from "../../Assets/Mayank_Kr_Singh.pdf";
import MS from "../../Assets/favicon.ico"
const Navbar = () => {
  return (
    <>
        
        <header style={{background: "aliceblue"}}>

 


  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{boxShadow:"5px solid"}}>
        <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">
                <img src={MS} height="30" width="40"/>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href = "mailto:mstict16@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    id="intro-example"
    class="p-5 text-center bg-image"
  
  >
    <div class="mask" >
      <div class="d-flex justify-content-center align-items-center h-100 ">
        <div  >
          <h4 class="mb-3 name  text-white"> Hi, My Name is <bold class="singh"> Mayank Singh</bold> </h4>
          
        

          <h5 class="mb-4 px-4 designation" style={{color:"#CCD6F6"}}>I’m a software developer specializing in building FrontEnd, Currently I’m working as a  (React) FrontEnd Developer at Alchemy Infotech.</h5>
          <a
            class="btn  btn-lg m-2"
            href = "mailto:mstict16@gmail.com"
            role="button"
            rel="noreferrer noopener"
          
            style={{color:"#CCD6F6"}}
          >Contact me</a
          >
          <a
          href={resume}
            class="btn  btn-lg m-2"
         style={{color:"#CCD6F6"}}
            target="_blank"
            rel="noreferrer noopener"
            role="button"
          > Resume</a
          >
        </div>
      </div>
    </div>
  </div>

</header>

    </>
  )
}

export default Navbar