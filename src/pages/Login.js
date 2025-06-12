// src/pages/Login.js
import React from 'react';
import { Container, Box, Button, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Ingresar
          </Button>
          <Link component={RouterLink} to="/register" variant="body2">
            ¿No tienes una cuenta todavía en MasterBike? Regístrate
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
