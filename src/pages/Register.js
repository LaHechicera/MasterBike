// src/pages/Register.js
import React from 'react';
import { Container, Box, Button, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Register() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth label="Nombre Completo" name="name" autoComplete="name" autoFocus />
          <TextField margin="normal" required fullWidth label="Email" name="email" autoComplete="email" />
          <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" autoComplete="new-password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Registrar
          </Button>
          <Link component={RouterLink} to="/" variant="body2">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
