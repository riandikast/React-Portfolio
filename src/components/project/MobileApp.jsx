import React, { Component } from "react";
import Movflix from "../../assets/porto2.jpeg";
import Secondhand from "../../assets/porto6.jpeg";
export default class MobileApp extends Component {
  render() {
    return (
      <div className="">
        <div className="flex ml-20">
          <div className="">
            <img
              className="mt-4"
              src={Movflix}
              alt=""
              height="200"
              width="200"
            />
          </div>

          <div className="">
            <div className="text-lg font-extrabold text-left mt-16 ml-8 ">
              Movflix
            </div>
            <div className="text-xs mt-2 ml-8 text-left">
              Simple android application created using kotlin that showing movie
              data from API with trailer and description
            </div>
          </div>
        </div>

        <div className="flex ml-20 mt-12">
          <div className="">
            <img
              className="mt-4 mr-40 "
              src={Secondhand}
              alt=""
              height="160"
              width="160"
            />
          </div>

          <div className="">
            <div className="text-lg font-extrabold text-left mt-16 ">
              Secondhand
            </div>
            <div className="text-xs mt-2 text-left   ">
              This is an E-Commerce Application using an Android Platform named
              SecondHand that is held by Binar Academy for graduation
              requirements. In this application, we can buy and sell second
              products that we used before. This platform provides various types
              of user needs. This platform will bring together sellers and
              buyers to be able to negotiate goods and conduct transactions
              directly outside the platform
            </div>
          </div>
        </div>
      </div>
    );
  }
}
