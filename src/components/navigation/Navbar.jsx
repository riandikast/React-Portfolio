import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-github-blue h-full fixed w-44 ">
        <div className="flex items-center h-fill ml-6 mb-96  ">
          <div className="text-white text-sm ml-6 mr-60 space-y-2 m1280:mt-12 m1400:mt-28 m1150:text-lg m1150:mt-16 m1024:text-lg m1024:mt-6 ">
            <NavLink to={"/"}>
              <div>
                <button className="h-10">Home</button>
              </div>
            </NavLink>
            <NavLink to={"/about"}>
              <div>
                <button className="h-10">About</button>
              </div>
            </NavLink>
            <NavLink to={"/interest"}>
              <div>
                <button className="h-10">Interest</button>
              </div>
            </NavLink>
            <NavLink to={"/skills"}>
              <div>
                <button className="h-10">Skills</button>
              </div>
            </NavLink>
            <NavLink to={"/experience"}>
              <div>
                <button className="h-10">Experience</button>
              </div>
            </NavLink>
            <NavLink to={"/education"}>
              <div>
                <button className="h-10">Education</button>
              </div>
            </NavLink>
            <NavLink to={"/project"}>
              <div>
                <button className="h-10">Project</button>
              </div>
            </NavLink>
            <NavLink to={"/certificate"}>
              <div>
                <button className="h-10">Certificate</button>
              </div>
            </NavLink>
            <NavLink to={"/award"}>
              <div>
                <button className="h-10">Award</button>
              </div>
            </NavLink>
         
           

         
          </div>
        </div>
      </nav>
    );
  }
}
