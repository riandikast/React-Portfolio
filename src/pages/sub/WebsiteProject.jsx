import React, { Component } from "react";
import { motion } from "framer-motion";
import WebsiteApp from "../../components/project/WebsiteApp";

export default class Website extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-60 fixed ">
          <div className="text-white">
            <div className=" text-white mr-60 font-google text-3xl font-semibold  mt-20 ">
              <div className="mr-8">Website Project</div>
              <WebsiteApp/>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
