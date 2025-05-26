// src/components/Mascota.js
import React from 'react';

export function Mascota({ mascota }) {
  const mostrarDetalle = () => {
    const ventana = window.open('', '_blank');
    ventana.document.write(`
      <html>
        <head>
          <title>${mascota.nombre}</title>
          <style>
            body { font-family: sans-serif; padding: 20px; }
            img { max-width: 300px; height: auto; }
          </style>
        </head>
        <body>
          <h1>${mascota.nombre}</h1>
          <img src="${mascota.foto}" alt="Foto de ${mascota.nombre}" />
          <p><strong>Especie:</strong> ${mascota.especie}</p>
          <p><strong>Raza:</strong> ${mascota.raza}</p>
          <p>${mascota.descripcion}</p>
        </body>
      </html>
    `);
    ventana.document.close();
  };

  return (
    <div className="mascota-card">
      <h2>{mascota.nombre}</h2>
      <img
        src={mascota.foto}
        alt={`Foto de ${mascota.nombre}`}
        onClick={mostrarDetalle}
        style={{ cursor: 'pointer' }}
      />
      <p><strong>Especie:</strong> {mascota.especie}</p>
      <p><strong>Raza:</strong> {mascota.raza}</p>
      <p>{mascota.descripcion}</p>
    </div>
  );
}
