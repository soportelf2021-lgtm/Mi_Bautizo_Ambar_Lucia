import { useState } from "react";
import PeppaImage from "../assets/images/pepa.png";
import PeppaSound from "../assets/sounds/pepasound.mp3";

const Pepa = ({ onFinish }) => {
  const [audioStarted, setAudioStarted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const startAudio = () => {
    if (!audioStarted) {
      const audio = new Audio(PeppaSound);
      audio.play();
      setAudioStarted(true);

      // Mostrar el botón después de 10 segundos
      setTimeout(() => {
        setShowButton(true);
      }, 10000);
    }
  };

  const verInvitacion = () => {
    // Terminar splash
    onFinish();

    // Abrir pantalla completa
    setTimeout(() => {
      const elem = document.getElementById("invitacion");
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }, 100); // delay corto para asegurar que el div ya está renderizado
  };

  return (
    <div
      className="fixed inset-0 bg-pink-200 flex flex-col justify-center items-center z-50 cursor-pointer"
      onClick={startAudio} // click inicial para iniciar audio
    >
      <img
        src={PeppaImage}
        alt="Peppa Pig"
        className="w-40 h-40 sm:w-60 sm:h-60 animate-bounce rounded-md"
      />
      <div className="mt-6 border-4 border-[#856B5E] border-t-transparent rounded-full w-12 h-12 animate-spin"></div>

      {!showButton ? (
        <p className="mt-4 text-[#794B82] font-classic text-lg sm:text-xl font-bold text-center">
          ¡Haz clic para escuchar y cargar la invitación!
        </p>
      ) : (
        <button
          onClick={verInvitacion}
          className="mt-4 px-6 py-3 bg-pink-50 text-pink-300 rounded-full shadow-lg hover:bg-pink-600 transition font- text-[25px] font-cursive"
        >
          Ver invitación
        </button>
      )}
    </div>
  );
};

export default Pepa;
