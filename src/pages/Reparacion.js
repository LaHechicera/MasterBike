// src/pages/Reparacion.js
import React from 'react';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material';

export default function Reparacion() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reparación de Bicicletas
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Solicitar Reparación</Typography>
        <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField margin="normal" required label="Nombre" />
          <TextField margin="normal" required label="Email" type="email" />
          <TextField
            margin="normal"
            required
            label="Descripción del Problema"
            multiline
            rows={4}
          />
          <Button variant="contained" sx={{ mt: 2 }}>
            Enviar Solicitud
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
