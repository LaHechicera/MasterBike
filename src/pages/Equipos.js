// src/pages/Equipos.js
import React from 'react';
import { Container, Typography, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const equipos = [
  { id: 1, nombre: 'Equipo A', técnico: 'Carlos' },
  { id: 2, nombre: 'Equipo B', técnico: 'Ana' }
];

export default function Equipos() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Equipos de Reparación
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre del Equipo</TableCell>
              <TableCell>Técnico Líder</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipos.map((equipo) => (
              <TableRow key={equipo.id}>
                <TableCell>{equipo.id}</TableCell>
                <TableCell>{equipo.nombre}</TableCell>
                <TableCell>{equipo.técnico}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
