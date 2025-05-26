// src/components/MascotaList.js
import React, { useEffect, useState } from 'react';
import { Mascota } from './mascota';

export function MascotaList() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json")
      .then(res => res.json())
      .then(data => setMascotas(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="galeria-container">
      <h1>Galería de Mascotas</h1>
      <div className="galeria">
        {mascotas.map((m, idx) => (
          <Mascota key={idx} mascota={m} />
        ))}
      </div>
    </div>
  );
}

