// src/components/Mascota.js
import React from 'react';

export function Mascota({ mascota }) {
  const mostrarDetalle = () => {
    const ventana = window.open('', '_blank');

    // Creamos el contenido HTML
    const html = `
  <html>
    <head>
      <title>${mascota.nombre}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body { font-family: sans-serif; margin: 0; padding: 0; }
        .content { padding: 20px; }
        img { max-width: 300px; height: auto; display: block; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Adóptame</a>
        </div>
      </nav>
      <div class="content">
        <h1>${mascota.nombre}</h1>
        <img src="${mascota.foto}" alt="Foto de ${mascota.nombre}" />
        <p><strong>Especie:</strong> ${mascota.especie}</p>
        <p><strong>Raza:</strong> ${mascota.raza}</p>
        <p>${mascota.descripcion}</p>
      </div>
    </body>
  </html>
`;


    ventana.document.write(html);
    ventana.document.close();

    const style = ventana.document.createElement('style');
    style.textContent = `
      body { font-family: sans-serif; margin: 0; padding: 0; }
      nav {
        background-color:rgb(0, 0, 0);
        color: white;
        padding: 15px 20px;
        font-size: 1.2em;
        font-weight: bold;
      }
      .content {
        padding: 20px;
      }
      img { max-width: 300px; height: auto; display: block; margin-bottom: 20px; }
    `;
    ventana.document.head.appendChild(style);
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
