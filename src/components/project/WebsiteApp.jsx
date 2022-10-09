import React, { Component } from "react";
import Motor from "../../assets/porto3.jpeg";
import Tech from "../../assets/porto5.jpeg";
export default class WebsiteApp extends Component {
  render() {
    return (
      <div className="mt-12">
        <div className="flex ml-20">
          <div className="">
            <img className="mt-4" src={Motor} alt="" height="230" width="230" />
          </div>

          <div className="">
            <div className="text-lg font-extrabold text-left mt-8 ml-6 ">
              Penjualan Motor Bekas
            </div>
            <div className="text-xs mt-2 ml-6 ">
              website application for selling secondhand motorcyle
            </div>
          </div>
        </div>

        <div className="flex ml-20 mt-12">
          <div className="">
            <img className="mt-4" src={Tech} alt="" height="360" width="360" />
          </div>

          <div className="">
            <div className="text-lg font-extrabold text-left mt-4 ml-6 ">
              Online Tech Shop
            </div>
            <div className="text-xs mt-2 ml-6 text-left ">
              Simple online shop web application using HTML, CSS, and Bootstrap.
              Used Codeigniter as framework and MySQL as a database
            </div>
          </div>
        </div>
      </div>
    );
  }
}
