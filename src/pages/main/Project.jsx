import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default class Project extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-44 fixed ">
          <div className="text-white ml-8">
            <div className=" text-white mr-60 font-google text-3xl font-semibold  mt-20 ">
              <div className="mr-8 ml-6">Project</div>
            </div>

            <div className="ml-4 mr-2 mt-8">
              <Link to="/project/dekstop">
                <div className=" ml-60 mt-8 rounded-lg px-6  bg-github-medium-blue h-16 w-60  py-2">
                  <div className="flex space-x-36 select-none">
                    <div className="ml-2 mt-2  text-base ">Desktop Project</div>
                    <i class="mt-1  fixed bx bxs-right-arrow-circle bx-md"></i>
                  </div>
                </div>
              </Link>

              <Link to="/project/mobile">
                <div className=" ml-60 mt-8 rounded-lg px-6  bg-github-medium-blue h-16 w-60  py-2">
                  <div className="flex space-x-36 select-none">
                    <div className="ml-2 mt-2  text-base ">Mobile Project</div>
                    <i class="fixed mt-1 bx bxs-right-arrow-circle bx-md"></i>
                  </div>
                </div>
              </Link>

              <Link to="/project/website">
                <div className=" ml-60 mt-8 rounded-lg px-6  bg-github-medium-blue h-16 w-60  py-2">
                  <div className="flex space-x-36 select-none">
                    <div className="ml-2 mt-2  text-base ">Website Project</div>
                    <i class="fixed mt-1 bx bxs-right-arrow-circle bx-md"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
