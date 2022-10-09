import React, { Component } from "react";

import { motion } from "framer-motion";

export default class Skills extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-44 fixed ">
          <div className="text-white ">
            <div className=" text-white mr-60 font-google text-3xl font-semibold  mt-12 ">
              <div className="ml-16"> Skills</div>
            </div>
            <div className="flex h-96 ml-6 ">
              <div>
                <div className="">
                  <div className="mr-4 space-y-6 text-white font-google text-sm font-semibold ml-2 mt-8">
                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Kotlin</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Javascript</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">HTML</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">CSS</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Python</div>
                      <div className="fixed">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="mr-12 space-y-6 text-white font-google text-sm font-semibold ml-2 mt-8">
                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">MySql</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Git</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">React</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Adobe Photoshop</div>
                      <div className="fixed">Beginner</div>
                    </div>

                    <div className="flex rounded-lg px-4 space-x-64 bg-github-medium-blue h-10 w-96  py-2">
                      <div className="ml-2">Sleep</div>
                      <div className="fixed">Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
