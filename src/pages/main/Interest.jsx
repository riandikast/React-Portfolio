import React, { Component } from "react";
import Mobile from "../../assets/mobile.png";
import Game from "../../assets/game.jpg";
import Multimedia from "../../assets/multimedia.jpg";
import { motion } from "framer-motion";

export default class Interest extends Component {
  render() {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div className=" bg-github-darker-blue w-full h-full ml-44 fixed ">
          <div className="text-white" >
            <div className="flex h-96 mt-2 ml-20">
              <div>
                <div className=" space-x-80 text-white mr-8 font-google text-3xl font-semibold  mt-32 ">
                  <div className="mr-8"> Interest</div>
                </div>
                <div className="flex">
                  <div className="mr-12 text-white font-google text-lg font-semibold ml-2 mt-8">
                    Mobile Development
                    <img
                      className="mt-4 ml-6"
                      src={Mobile}
                      alt=""
                      height="170"
                      width="180"
                    />
                  </div>
                  <div className="mr-12 text-white font-google text-lg font-semibold ml-2 mt-8">
                    Game Development
                    <img
                      className="mt-4"
                      src={Game}
                      alt=""
                      height="190"
                      width="250"
                    />
                  </div>
                  <div className="mr-12   text-white font-google text-lg font-semibold ml-2 mt-8">
                    Multimedia
                    <img
                      className="mt-4"
                      src={Multimedia}
                      alt=""
                      height="190"
                      width="250"
                    />
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
