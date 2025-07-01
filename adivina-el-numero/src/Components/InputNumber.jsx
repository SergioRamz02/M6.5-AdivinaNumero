import React from "react";
import "../assets/Styles/InputNumber.css"

export default function InputNumber({value, onChange}){
    return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Ingresa un número"
    />
  );
}