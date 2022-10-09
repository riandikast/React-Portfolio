import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Certificate extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-44 fixed ">
          <div className="text-white ml-6">
            <div className=" text-white mr-60 font-google text-3xl font-semibold  mt-20 ">
              <div className="mr-8"> Certificate </div>
            </div>
            <div>
              <div className=" ml-44  mt-8 rounded-lg px-6  bg-github-medium-blue h-16 w-96   py-2">
                <div className="flex space-x-72 mt-2">
                  <div className="ml-2  text-base ">Android Developer - Binar Academy </div>
                  <div className="fixed text-base">2022</div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
