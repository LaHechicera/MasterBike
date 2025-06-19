// src/pages/Inventario.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Box,
  Dialog, // Importar Dialog para los modales
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField, // Importar TextField para campos de texto
  FormControl, // Para el selector de categoría
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

export default function Inventario() {
  const [bicicletas, setBicicletas] = useState([
    { id: 1, nombre: 'Bicicleta de Montaña', stock: 5 },
    { id: 2, nombre: 'Bicicleta de Ruta', stock: 3 }
  ]);

  const [repuestos, setRepuestos] = useState([
    { id: 1, nombre: 'Cadena', stock: 10 },
    { id: 2, nombre: 'Frenos', stock: 4 }
  ]);

  // --- Estados para Modales de Agregar ---
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductStock, setNewProductStock] = useState('');
  const [newProductCategory, setNewProductCategory] = useState(''); // 'bicicleta' o 'repuesto'

  // --- Estados para Modales de Eliminar Cantidad ---
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null); // Producto seleccionado para eliminar
  const [removeAmount, setRemoveAmount] = useState('');

  // --- Manejadores para Abrir/Cerrar Modales ---
  const handleOpenAddDialog = (category) => {
    setNewProductCategory(category);
    setNewProductName('');
    setNewProductStock('');
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleOpenRemoveDialog = (product, category) => {
    setProductToRemove({ ...product, category }); // Guardar el producto y su categoría
    setRemoveAmount('');
    setOpenRemoveDialog(true);
  };

  const handleCloseRemoveDialog = () => {
    setOpenRemoveDialog(false);
    setProductToRemove(null);
  };

  // --- Lógica para Agregar Producto ---
  const handleAddProduct = () => {
    if (!newProductName || isNaN(parseInt(newProductStock)) || parseInt(newProductStock) < 0) {
      alert('Por favor, ingresa un nombre y una cantidad de stock válida.');
      return;
    }

    const stockValue = parseInt(newProductStock);

    if (newProductCategory === 'bicicleta') {
      const newId = Math.max(...bicicletas.map(b => b.id), 0) + 1;
      setBicicletas([...bicicletas, { id: newId, nombre: newProductName, stock: stockValue }]);
    } else if (newProductCategory === 'repuesto') {
      const newId = Math.max(...repuestos.map(r => r.id), 0) + 1;
      setRepuestos([...repuestos, { id: newId, nombre: newProductName, stock: stockValue }]);
    }
    handleCloseAddDialog();
  };

  // --- Lógica para Eliminar Cantidad de Producto ---
  const handleRemoveProductAmount = () => {
    if (!productToRemove || isNaN(parseInt(removeAmount)) || parseInt(removeAmount) <= 0) {
      alert('Por favor, ingresa una cantidad válida para eliminar.');
      return;
    }

    const amountToRemove = parseInt(removeAmount);

    if (productToRemove.category === 'bicicleta') {
      setBicicletas(prevBicicletas =>
        prevBicicletas.map(item => {
          if (item.id === productToRemove.id) {
            const newStock = item.stock - amountToRemove;
            return { ...item, stock: newStock >= 0 ? newStock : 0 }; // Asegura que el stock no sea negativo
          }
          return item;
        }).filter(item => item.stock > 0) // Elimina si el stock llega a 0 o menos
      );
    } else if (productToRemove.category === 'repuesto') {
      setRepuestos(prevRepuestos =>
        prevRepuestos.map(item => {
          if (item.id === productToRemove.id) {
            const newStock = item.stock - amountToRemove;
            return { ...item, stock: newStock >= 0 ? newStock : 0 };
          }
          return item;
        }).filter(item => item.stock > 0)
      );
    }
    handleCloseRemoveDialog();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inventario
      </Typography>

      {/* --- Sección de Bicicletas --- */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" gutterBottom component="div" sx={{ mb: 0 }}>
          Bicicletas
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenAddDialog('bicicleta')}>
          Agregar Bicicleta
        </Button>
      </Box>
      <Paper sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bicicletas.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay bicicletas en el inventario.
                </TableCell>
              </TableRow>
            ) : (
              bicicletas.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleOpenRemoveDialog(item, 'bicicleta')}
                    >
                      Eliminar Cantidad
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* --- Sección de Repuestos --- */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" gutterBottom component="div" sx={{ mb: 0 }}>
          Repuestos
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenAddDialog('repuesto')}>
          Agregar Repuesto
        </Button>
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repuestos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay repuestos en el inventario.
                </TableCell>
              </TableRow>
            ) : (
              repuestos.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleOpenRemoveDialog(item, 'repuesto')}
                    >
                      Eliminar Cantidad
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* --- Modal para Agregar Nuevo Producto --- */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>
          Agregar Nuevo {newProductCategory === 'bicicleta' ? 'Bicicleta' : 'Repuesto'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre del Producto"
            type="text"
            fullWidth
            variant="standard"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Cantidad de Stock"
            type="number"
            fullWidth
            variant="standard"
            value={newProductStock}
            onChange={(e) => setNewProductStock(e.target.value)}
            inputProps={{ min: 0 }}
          />
          {/* El selector de categoría se podría usar si hubiera un único botón de "Agregar producto"
              En este caso, la categoría ya viene definida por el botón que abre el modal.
              Podrías añadirlo para que el usuario pueda cambiar de categoría desde el modal.
          */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancelar</Button>
          <Button onClick={handleAddProduct}>Agregar</Button>
        </DialogActions>
      </Dialog>

      {/* --- Modal para Eliminar Cantidad de Producto --- */}
      <Dialog open={openRemoveDialog} onClose={handleCloseRemoveDialog}>
        <DialogTitle>Eliminar Cantidad de {productToRemove?.nombre}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Stock actual: {productToRemove?.stock}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Cantidad a Eliminar"
            type="number"
            fullWidth
            variant="standard"
            value={removeAmount}
            onChange={(e) => setRemoveAmount(e.target.value)}
            inputProps={{ min: 1, max: productToRemove?.stock || 1 }} // Limitar a la cantidad de stock
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemoveDialog}>Cancelar</Button>
          <Button onClick={handleRemoveProductAmount} color="error">
            Confirmar Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}