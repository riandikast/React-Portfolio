import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-github-blue  h-full fixed w-60 ">
        <div className="flex items-center h-fill ml-12 mb-96">
          <div className="text-white text-xl ml-6 mr-60 mt-20 space-y-4  ">
            <NavLink to={"/"}>
              <div>
                <button className="h-12">Home</button>
              </div>
            </NavLink>
            <NavLink to={"/about"}>
              <div>
                <button className="h-12">About</button>
              </div>
            </NavLink>
            <NavLink to={"/interest"}>
              <div>
                <button className="h-12">Interest</button>
              </div>
            </NavLink>
            <NavLink to={"/skills"}>
              <div>
                <button className="h-12">Skills</button>
              </div>
            </NavLink>
            <NavLink to={"/experience"}>
              <div>
                <button className="h-12">Experience</button>
              </div>
            </NavLink>
            <NavLink to={"/education"}>
              <div>
                <button className="h-12">Education</button>
              </div>
            </NavLink>
            <NavLink to={"/project"}>
              <div>
                <button className="h-12">Project</button>
              </div>
            </NavLink>
            <NavLink to={"/certificate"}>
              <div>
                <button className="h-12">Certificate</button>
              </div>
            </NavLink>
            <NavLink to={"/award"}>
              <div>
                <button className="h-12">Award</button>
              </div>
            </NavLink>
         
           

         
          </div>
        </div>
      </nav>
    );
  }
}
