// src/components/MascotaList.js
import React, { useEffect, useState } from 'react';
import { Mascota } from './mascota';

export function MascotaList() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json")
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
