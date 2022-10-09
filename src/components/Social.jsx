import React, { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <div className="mr-80  text-white font-google text-3xl font-semibold ml-2  space-x-4">
        <a href="https://www.linkedin.com/in/riandikast/">
          {" "}
          <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://github.com/riandikast">
          {" "}
          <i class="bx bxl-github"></i>
        </a>
      </div>
    );
  }
}
