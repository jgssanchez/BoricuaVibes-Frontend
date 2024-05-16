import React, { useState } from 'react';
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
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const initialProduct = {
  id: '',
  name: '',
  description: '',
  price: '',
};

const initialErrors = {
  name: false,
  description: false,
  price: false,
};

const ProductCrud = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [product, setProduct] = useState(initialProduct);
  const [errors, setErrors] = useState(initialErrors);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setProduct(initialProduct);
    setErrors(initialErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { name, description, price } = product;
    if (!name || !description || !price) {
      setErrors({
        name: !name,
        description: !description,
        price: !price,
      });
      return;
    }

    if (editing) {
      const updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
      setProducts(updatedProducts);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    handleClose();
  };

  const handleEdit = (selectedProduct) => {
    setProduct(selectedProduct);
    setEditing(true);
    setOpen(true);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={product.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name && 'Name is required'}
          />
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={product.description}
            onChange={handleChange}
            error={errors.description}
            helperText={errors.description && 'Description is required'}
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="text"
            fullWidth
            value={product.price}
            onChange={handleChange}
            error={errors.price}
            helperText={errors.price && 'Price is required'}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editing ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(product)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(product.id)}
                  >
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
