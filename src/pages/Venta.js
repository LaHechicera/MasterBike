// src/pages/Venta.js
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const bicicletas = [
  { id: 1, nombre: 'Bicicleta de Montaña', imagen: 'https://via.placeholder.com/150', precio: 500 },
  { id: 2, nombre: 'Bicicleta de Ruta', imagen: 'https://via.placeholder.com/150', precio: 600 },
  // Agrega más bicicletas según necesites
];

export default function Venta() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Venta de Bicicletas
      </Typography>
      <Grid container spacing={2}>
        {bicicletas.map((bici) => (
          <Grid item xs={12} sm={6} md={4} key={bici.id}>
            <Card>
              <CardMedia component="img" height="140" image={bici.imagen} alt={bici.nombre} />
              <CardContent>
                <Typography variant="h6">{bici.nombre}</Typography>
                <Typography variant="body2">${bici.precio}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
