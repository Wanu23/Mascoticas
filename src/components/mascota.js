// src/components/Mascota.js
import React from 'react';

export function Mascota({ mascota }) {
  return (
    <div className="mascota-card">
        <h2>{mascota.nombre}</h2>
      <img src={mascota.foto} alt={`Foto de ${mascota.nombre}`} />
      <p><strong>Especie:</strong> {mascota.especie}</p>
      <p><strong>Raza:</strong> {mascota.raza}</p>
      <p>{mascota.descripcion}</p>
    </div>
  );
}
