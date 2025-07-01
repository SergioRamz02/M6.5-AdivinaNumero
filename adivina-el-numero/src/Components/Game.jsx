import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';
import "../assets/Styles/Game.css"

export default function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(null);
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Generar número aleatorio al iniciar o reiniciar
  const generarNumeroSecreto = () => {
    const numero = Math.floor(Math.random() * 100) + 1;
    setNumeroSecreto(numero);
    setMensaje('');
    setNumeroUsuario('');
  };

  useEffect(() => {
    generarNumeroSecreto();
  }, []);

  const manejarCambio = (e) => {
    setNumeroUsuario(e.target.value);
  };

  const verificarNumero = (e) => {
    e.preventDefault();
    const numero = parseInt(numeroUsuario, 10);

    if (isNaN(numero)) {
      setMensaje('Por favor, ingresa un número válido.');
      return;
    }

    if (numero === numeroSecreto) {
      setMensaje('¡Correcto!');
    } else if (numero < numeroSecreto) {
      setMensaje('El número es mayor.');
    } else {
      setMensaje('El número es menor.');
    }
  };

  return (
    <div className='container'>
      <h2>Juego de Adivinar el Número</h2>
      <form onSubmit={verificarNumero}>
        <InputNumber value={numeroUsuario} onChange={manejarCambio} />
        <button type="submit">Adivinar</button>
      </form>
      <Message mensaje={mensaje} />
      <RestartButton onRestart={generarNumeroSecreto} />
    </div>
  );
}