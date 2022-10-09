import React, { Component } from "react";
import Ms from "../../assets/porto1.jpeg";
import CleverClass from "../../assets/porto4.jpeg";

export default class DekstopApp extends Component {
  render() {
    return (
      <div className="mt-12 ml-6">
        <div className="flex ml-20">
          <div className="">
            <img className="mt-4" src={Ms} alt="" height="225" width="225" />
          </div>

          <div className="">
            <div className="text-sm font-extrabold text-left mt-4 ml-6 ">
              Monster Shooter
            </div>
            <div className="text-xs mt-2 ml-6 text-left ">
              2D Dekstop game, the concept is like metal slug but with character
              skill, created using python (pygame)
            </div>
          </div>
        </div>

        <div className="flex ml-20 mt-12">
          <div className="">
            <img className="mt-4" src={CleverClass} alt="" height="170" width="180" />
          </div>

          <div className="">
            <div className="text-sm font-extrabold text-left mt-8 ml-6 ">
              Clever Class
            </div>
            <div className="text-xs mt-2 ml-6 ">
              Educational dekstop application created using java
            </div>
          </div>
        </div>
      </div>
    );
  }
}
