import PropTypes from "prop-types";
import programs from "../utils/programs.json"; // Asegúrate de que la ruta sea correcta
import ProgramCard from "./ProgramCard"; // Importa el componente ProgramCard

const Programacion = ({ backgroundUrl }) => {
  return (
    <div
      className="w-screen h-screen text-white"
      style={{
        background: `url(${backgroundUrl}) no-repeat center center`,
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Fondo con blur */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{
          backdropFilter: "blur(10px)", // Nivel de desenfoque
          WebkitBackdropFilter: "blur(10px)", // Compatibilidad con navegadores
        }}></div>

      {/* Contenido desplazable */}
      <div
        className="relative z-10 h-full w-full overflow-y-auto flex flex-col items-center gap-6 py-8"
        style={{
          scrollbarWidth: "thin", // Estilo de scroll para navegadores que soporten
          scrollbarColor: "#F86808 transparent",
        }}>
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );
};

Programacion.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
};

export default Programacion;
