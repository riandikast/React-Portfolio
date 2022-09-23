
import React from "react";
import { Routes, Route, useLocation, Link, Await } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/main/Home";
import Interest from "../../pages/main/Interest";
import About from "../../pages/main/About";
import Skills from "../../pages/main/Skills";
import Education from "../../pages/main/Education";
import Experience from "../../pages/main/Experience";
import Project from "../../pages/main/Project";
import Certificate from "../../pages/main/Certificate";
import Award from "../../pages/main/Award";
import Dekstop from "../../pages/sub/DesktopProject";
import Mobile from "../../pages/sub/MobileProject";
import Website from "../../pages/sub/WebsiteProject";

function AnimatedRoutes() {
  let location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/interest" element={<Interest/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/project/dekstop" element={<Dekstop/>}></Route>
        <Route path="/project/mobile" element={<Mobile/>}></Route>
        <Route path="/project/website" element={<Website/>}></Route>
        <Route path="/certificate" element={<Certificate/>}></Route>
        <Route path="/award" element={<Award/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
