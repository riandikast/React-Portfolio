import React, { Component } from "react";
import { motion } from "framer-motion";
import DekstopApp from "../../components/project/DesktopApp";
export default class Desktop extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-44 fixed ">
          <div className="text-white">
            <div className=" text-white mr-60 font-google text-3xl font-semibold  mt-12 ">
              <div className="mr-8 ml-16">Desktop Project</div>
              <DekstopApp />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
