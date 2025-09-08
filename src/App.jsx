import { useState, useEffect } from 'react';
import './App.css';
import Fondo from './assets/images/Fondo3.webp';
import ContenidoAnimado from "./components/ContenidoAnimado";
import Pepa from "./components/Pepa";

function App() {
  const [bgSize, setBgSize] = useState('100%');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setBgSize('cover');
      else if (width < 768) setBgSize('cover');
      else if (width < 1200) setBgSize('cover');
      else setBgSize('contain'); // opcional para escritorio
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  // Si showSplash es true, mostramos el splash de Peppa
  if (showSplash) return <Pepa onFinish={() => setShowSplash(false)} />;

  return (
    <div id="invitacion" className="relative">
      {/* Fondo */}
      <div
        className="fixed inset-0 z-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: bgSize,
          backgroundPosition: 'center center',
          backgroundColor: '#f4acba',
        }}
      ></div>

      <ContenidoAnimado>
        <div className="relative w-full min-h-screen">

          {/* Títulos */}
          <div className="relative top-[6vh] sm:top-[12vh] md:top-[10vh] lg:top-[7vh] left-0">
            <div className="flex flex-col items-center text-center space-y-2">
              <h1 className="gold-text text-[40px] mb-[-10px] sm:text-3xl md:text-4xl lg:text-6xl font-sacramento">Mi Bautizo</h1>
              <h1 className="gold-text text-[40px] sm:text-3xl md:text-4xl lg:text-6xl font-sacramento">y</h1>
              <h1 className="gold-text text-[40px] sm:text-3xl md:text-4xl lg:text-6xl font-sacramento">Cumpleaños #3</h1>
            </div>
          </div>

          {/* Nombre */}
          <div className="relative top-[10vh] sm:top-[12vh] md:top-[10vh] lg:top-[8vh] left-0">
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-20 text-center">
              <h1 className="text-[#8A5585] font-sacramento text-[35px] sm:text-3xl md:text-4xl lg:text-6xl">
                Ambar Lucia Cortés Urban
              </h1>
            </div>
          </div>

          {/* Fecha */}
          <div className="relative top-[9vh] sm:top-[12vh] md:top-[10vh] lg:top-[8vh] left-0">
            <div className="flex flex-col items-center font-classic mt-6 sm:mt-8">
              <div className="w-full max-w-xs sm:max-w-sm border-t-2 border-[#8482b2]"></div>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-2">
                <span className="text-sm sm:text-base font-semibold text-[#8482b2]">SABADO</span>
                <span className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#8482b2]">18</span>
                <span className="text-sm sm:text-base font-semibold text-[#8482b2]">OCTUBRE</span>
              </div>
              <div className="w-full max-w-xs sm:max-w-sm border-t-2 border-[#908FB5] mt-2"></div>
            </div>
          </div>

          {/* Misa y Recepción */}
          <div className="relative top-[10vh] sm:top-[12vh] md:top-[10vh] lg:top-[12vh] left-0">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch md:gap-5 w-full max-w-5xl text-[#856B5E] font-classic">
              {/* MISA */}
              <div className="flex-1 p-4 space-y-2 text-center">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide ">
                  MISA: <span className="font-black">3:30 PM</span>
                </h3>
                <div className="w-full border-t-2 border-[#856B5E] mx-auto"></div>
                <p className="text-base sm:text-lg font-semibold">Sagrado Corazón de Balcones</p>
                <a
                  href="https://maps.app.goo.gl/FVCVtF9cC3GK2QMU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:underline font-bold text-[#A571BF]"
                >
                  Av. 3 Sur Balcones del Sur.
                </a>
              </div>

              {/* RECEPCIÓN */}
              <div className="flex-1 p-3 space-y-2 text-center ">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide mt-[-5px]">
                  RECEPCIÓN: <span className="font-black">4:30 PM</span>
                </h3>
                <div className="w-full border-t-2 border-[#856B5E] mx-auto"></div>
                <p className="text-base sm:text-lg font-semibold">Salón Jardín Los Olivos</p>
                <a
                  href="https://maps.app.goo.gl/tfztMSXPU5PfKKcaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-[#A571BF] hover:underline"
                >
                  Esmeralda 535, Minerales de Guadalupe Sur
                </a>
              </div>
            </div>
          </div>

          {/* Papás y Padrinos */}
          <div className="relative top-[5vh] sm:top-[12vh] md:top-[10vh] lg:top-[8vh] left-0">
            <div className="flex flex-col items-center mt-8 space-y-4 font-cursive">
              <div>
                <h3 className="text-normal sm:text-xl font-bold tracking-wide gold-text ">Papás </h3>
                <p className="text-[28px] sm:text-2xl md:text-3xl mt-1 font-sacramento text-[#856B5E] font-black">Grecia Urban & Luis Cortés</p>
              </div>
              <div>
                <h3 className="text-normal sm:text-xl font-bold tracking-wide gold-text">Padrinos</h3>
                <p className="text-[28px] sm:text-2xl md:text-3xl mt-1 font-sacramento text-[#856B5E] font-black">Carlos Urban & Ariadna Gijón</p>
              </div>
            </div>
          </div>

        </div>
      </ContenidoAnimado>
    </div>
  );
}

export default App;
