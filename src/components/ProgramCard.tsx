import React from "react";

export default function ProgramCard({ program }) {
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
        <img
          src={program.imagen}
          alt={program.nombre}
          className="w-48 h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-black">
              {program.nombre}
            </h2>
            <p className="text-gray-700 mb-2">{program.descripcion}</p>
            <p className="text-gray-600">
              <strong>Hora:</strong> {program.hora}
            </p>
            <p className="text-gray-600">
              <strong>Día:</strong> {program.dia}
            </p>
            <p className="text-gray-600">
              <strong>Conductor:</strong> {program.conductor}
            </p>
            <p className="text-gray-600">
              <strong>Operador:</strong> {program.operador}
            </p>
          </div>
          <a
            href={program.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block">
            Más información
          </a>
        </div>
      </div>
    </div>
  );
}
