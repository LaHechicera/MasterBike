// src/pages/Arriendo.js
import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

export default function Arriendo() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Arriendo de Bicicletas
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Realizar un Arriendo
        </Typography>
        <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField margin="normal" required label="Nombre" />
          <TextField margin="normal" required label="Email" type="email" />
          <TextField margin="normal" required label="Fecha de Inicio" type="date" InputLabelProps={{ shrink: true }} />
          <TextField margin="normal" required label="Fecha de Fin" type="date" InputLabelProps={{ shrink: true }} />
          <Button variant="contained" sx={{ mt: 2 }}>
            Confirmar Arriendo
          </Button>
        </Box>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Disponibilidad de Bicicletas
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={4} key={item}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>Bicicleta {item}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
