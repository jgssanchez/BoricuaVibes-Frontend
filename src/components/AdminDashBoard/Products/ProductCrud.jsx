import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import clientAxios from '../../../utils/clientAxios';
import { useSelector } from 'react-redux';

const ProductCrud = () => {
  const {products} = useSelector((state) =>state.product)
  const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    description: false,
    price: false,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      if (response.data && Array.isArray(response.data)) {
        setProductos(response.data);
      } else {
        setProductos([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setProduct({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
    });
    setErrors({
      name: false,
      description: false,
      price: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const { name, description, price, image } = product;
    if (!name || !description || !price || !image)  {
      setErrors({
        name: !name,
        description: !description,
        price: !price,
        image: !image,
      });
      return;
    }

    try {
      if (editing) {
        await axios.put(`/api/products/${product.id}`, product);
      } else {
        const newProduct = { ...product, id: Date.now() };
        await clientAxios.post('/products/create', newProduct);
        await fetchProducts();
        setProduct({
          id: '',
          name: '',
          description: '',
          price: '',
          image: '',
        });
        setErrors({
          name: false,
          description: false,
          price: false,
        });
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }

    handleClose();
  };

  const handleEdit = (selectedProduct) => {
    setProduct(selectedProduct);
    setEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={{ margin: '100px auto', maxWidth: '800px' }}>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          AGREGAR PRODUCTO
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Editar Producto' : 'Agregar Producto'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Nombre"
            type="text"
            fullWidth
            value={product.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name && 'El nombre es requerido'}
          />
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Descripción"
            type="text"
            fullWidth
            value={product.description}
            onChange={handleChange}
            error={errors.description}
            helperText={errors.description && 'La descripción es requerida'}
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            label="Precio"
            type="text"
            fullWidth
            value={product.price}
            onChange={handleChange}
            error={errors.price}
            helperText={errors.price && 'El precio es requerido'}
          />
          <TextField
            margin="dense"
            id="image"
            name="image"
            label="URL de la Imagen"
            type="text"
            fullWidth
            value={product.image}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editing ? 'Guardar' : 'Agregar'}
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table aria-label="tabla de productos">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100px', height: 'auto' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="editar" onClick={() => handleEdit(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="eliminar" onClick={() => handleDelete(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductCrud;
