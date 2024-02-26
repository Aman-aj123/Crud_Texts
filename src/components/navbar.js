import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

     return (
          <>
               <nav className={`navbar text-black txt-white navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.modeValue.background === "white" ? "light" : "dark"}>
                    <div className="container-fluid">
                         <a className="navbar-brand" to="/">{props.title}</a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/textArea">textArea</Link>
                                   </li>
                                  
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/accordion">Accordion</Link>
                                   </li>
                              </ul>

                              <div onClick={()=> {props.handleModeClick("black")}} className="mx-5 form-check form-switch">
                                   <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                              </div>

                              <div onClick={()=> {props.handleModeClick("deeppink")}} className="form-check form-switch">
                                   <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                              </div>
                              <div onClick={()=> {props.handleModeClick("orange")}} className="form-check form-switch">
                                   <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                              </div>
                         </div>


                    </div>
               </nav>

               <div className={`alert alert-${props.alertInfo?.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alertInfo?.type}</strong> {props.alertInfo?.message}
               </div>

          </>
     )
}

export default Navbar
