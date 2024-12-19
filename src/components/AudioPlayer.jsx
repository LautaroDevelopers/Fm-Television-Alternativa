import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioPlayer = ({ streamUrl, logoUrl, backgroundUrl, name }) => {
  const audioRef = useRef(new Audio(streamUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const setMaxVolume = () => {
    setVolume(1);
    audioRef.current.volume = 1;
  };

  const setMinVolume = () => {
    setVolume(0);
    audioRef.current.volume = 0;
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center text-white"
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
          backdropFilter: "blur(10px)", // Mayor nivel de desenfoque
          WebkitBackdropFilter: "blur(10px)", // Compatibilidad con navegadores
        }}></div>

      {/* Contenido principal */}
      <div className="relative z-10 rounded-lg p-8 shadow-lg w-full flex flex-col items-center">
        {/* Logo */}
        <img
          src={logoUrl}
          alt={name}
          className="h-[200px] w-[200px] mx-auto rounded-[50%] shadow-md"
        />

        {/* Nombre */}
        <div className="text-center text-4xl font-extrabold my-6 tracking-wider">
          {name}
        </div>

        {/* Control de volumen */}
        <div className="w-full my-6 flex flex-col items-center gap-4">
          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={changeVolume}
            className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer focus:outline-none"
            style={{
              background: `linear-gradient(to right, #F86808 ${
                volume * 100
              }%, #fff ${volume * 100}%)`,
            }}
          />

          {/* Botones y volumen actual */}
          <div className="flex items-center gap-6 justify-between w-full text-4xl mt-2">
            <button
              onClick={setMinVolume}
              className="px-4 py-2 rounded-full shadow-md transition-all">
              <i className="ri-volume-down-line text-6xl"></i>
            </button>
            <div className="font-medium text-xl text-white tracking-wide">
              {Math.round(volume * 100)}%
            </div>
            <button
              onClick={setMaxVolume}
              className="px-4 py-2 rounded-full shadow-md transition-all">
              <i className="ri-volume-up-line text-6xl"></i>
            </button>
          </div>
        </div>

        {/* Botón de reproducción */}
        <div className="flex items-center gap-6 justify-center w-full text-4xl mt-2">
          <a href="/programacion">
            <i className="text-4xl ri-calendar-fill"></i>
          </a>
          <button
            onClick={togglePlay}
            className="text-7xl flex items-center justify-center transition-all transform hover:scale-110">
            {isPlaying ? (
              <i className="text-8xl mx-4 ri-stop-circle-fill"></i>
            ) : (
              <i className="text-8xl mx-4 ri-play-circle-fill"></i>
            )}
          </button>
          <button>
            <i className="text-4xl ri-broadcast-fill text-[#F86808] animate-pulse"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AudioPlayer;
