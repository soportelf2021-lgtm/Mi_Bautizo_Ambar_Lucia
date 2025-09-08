// src/components/ContenidoAnimado.jsx
import { motion as Motion } from "framer-motion";



const ContenidoAnimado = ({ children }) => {
  return (
    <div className="overflow-hidden w-full relative z-10 flex justify-center">
      <Motion.div
        className="inline-block"
        initial={{ x: "-100vw" }} // empieza fuera de la pantalla a la izquierda
        animate={{ x: 0 }}        // termina centrado en su contenedor
        transition={{
          duration: 2.5,          // duración de la animación
          ease: "easeOut",        // movimiento más natural
        }}
      >
        {children}
      </Motion.div>
    </div>
  );
};
export default ContenidoAnimado;
