import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Experience extends Component {
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
              <div className="mr-2 ml-16"> Experience</div>
            </div>
            <div>
              <div className=" ml-36   mt-8 rounded-lg px-4  bg-github-medium-blue h-24 w-140  py-2">
                <div className="flex space-x-80 mt-3">
                  <div className="ml-2  text-base ">MSIB Batch 2 – Independent Study </div>
                  <div className="fixed text-base">Feb 2022 – July 2022</div>
                </div>
                <div className="mr-40 ml-2">
                  <div className="fixed text-sm">Android Developer – Binar Academy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
