import React, { Component } from "react";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-60 fixed ">
          <div className="text-white" id="about">
            <div className="flex h-96 mt-12 ml-24">
              <div>
                <div className="space-x-80 text-white mr-28 font-google text-3xl font-semibold  mt-32 ">
                  <div>About</div>
                </div>
                <div className="mr-24   text-white font-google text-lg font-semibold ml-2 mt-8">
                  Hello I'm Andika, I'm a Junior Developer Passionate on Android
                  and Game development <br></br> I have been involved in project
                  with some language like Kotlin, Javascript, Python, Etc.{" "}
                  <br></br>Currently I serve as college student in
                  Singaperbangsa Karawang University.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
