
import React, { Component } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";


const NextArrow = (props) => {
    const { className,  onClick } = props;
    return (
        <div
      className={className}

      onClick={onClick}
    > <FaArrowAltCircleRight className=" absolute text-5xl text-red-500 top-1/2 -right-3 -translate-1/2 z-10"/></div>
    )
}

export default NextArrow