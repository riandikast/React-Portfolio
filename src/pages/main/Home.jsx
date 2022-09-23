import React, { Component } from "react";
import { motion } from "framer-motion";
import Social from "../../components/Social";
import Avatar from "../../components/Avatar";

export default class Home extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-60 fixed ">
          <div className="flex h-auto mt-12 ml-12">
            <div className="mt-8">
              <div className="mr-16  text-white font-google text-4xl font-semibold ml-12 mt-32 ">
                Amanda Riandikaseta
              </div>
              <div className="mr-36  text-white font-google text-3xl font-semibold ml-2 mt-6">
                Android Developer
              </div>

              <Social />
            </div>
            <Avatar/>
          </div>
        </div>
      </motion.div>
    );
  }
}
