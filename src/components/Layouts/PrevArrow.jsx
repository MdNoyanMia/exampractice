
import React, { Component } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {

    const { className,  onClick } = props;
    return (
        <div
            className={className}
          
            onClick={onClick}
        > <FaArrowAltCircleLeft className=" absolute text-5xl text-green-500 top-1/2 left-9 -translate-1/2 z-10" /></div>
    )
}

export default PrevArrow