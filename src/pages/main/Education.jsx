import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Education extends Component {
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
              <div className="mr-8"> Education</div>
            </div>
            <div>
              <div className=" ml-60 mt-8 rounded-lg px-4  bg-github-medium-blue h-24 w-128  py-2">
                <div className="flex space-x-96 mt-3">
                  <div className="ml-2  text-base ">
                    Singaperbangsa Karawang University{" "}
                  </div>
                  <div className="fixed text-base">2019 – 2023</div>
                </div>
                <div className="mr-40 ml-2">
                  <div className="fixed text-sm">Teknik Informatika</div>
                </div>
              </div>

              <div className=" ml-60 mt-8 rounded-lg px-4  bg-github-medium-blue h-24 w-128  py-2">
                <div className="flex space-x-96 mt-3">
                  <div className="ml-2  text-base ">
                    Sman 1 Cikarang Selatan
                  </div>
                  <div className="fixed text-base">2016 – 2019</div>
                </div>
                <div className="mr-40 ml-2">
                  <div className="fixed text-sm">Sciences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
