import React from "react";
import "../assets/Styles/Message.css"

export default function Message({mensaje}){
  return (
    !mensaje ? null : <p>{mensaje}</p>
  );
}
