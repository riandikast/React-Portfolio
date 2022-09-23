import React, { Component } from "react";
import { motion } from "framer-motion";
import MobileApp from "../../components/project/MobileApp";
export default class Mobile extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-60 fixed  overflow-y-scroll ">
          <div className="text-white ">
            <div className=" text-white mr-60 font-google text-3xl font-semibold   ">
              <div className="mr-8 py-20">Mobile Project</div>
              <MobileApp/>
              <div className="mb-20 bg-github-darker-blue  "></div>
            </div> 
          </div>
        </div>
      </motion.div>
    );
  }
}
