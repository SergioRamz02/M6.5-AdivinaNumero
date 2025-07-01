import React from "react";
import "../assets/Styles/RestartButton.css"

export default function RestartButton({onRestart}){
    return (
    <button onClick={onRestart}>
      Reiniciar Juego
    </button>
  );
}