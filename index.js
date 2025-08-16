const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Versión 2.0: nombre + álbum favorito
app.get('/', (req, res) => {
  res.json({
    version: '2.0',
    nombre: 'Pame Ratzam',
    album_favorito: 'Conxsion'
  });
});


app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
