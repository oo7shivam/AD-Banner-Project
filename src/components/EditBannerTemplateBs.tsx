import React, { useState } from 'react';
import { Banner } from '../types';
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface EditBannerTemplateBsProps {
  banner: Banner;
  open: boolean;
  onClose: () => void;
  onSave: (updatedBanner: Banner) => void;
}

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  cta: yup.string().required('CTA is required'),
  image: yup.string().url('Must be a valid URL').required('Image URL is required'),
  background: yup.string().required('Background is required'),
});

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  banner,
  open,
  onClose,
  onSave,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: banner,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        onSave(values);
        setIsSubmitting(false);
        onClose();
      }, 1000);
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Banner</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={3}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
            <TextField
              fullWidth
              id="cta"
              name="cta"
              label="CTA"
              value={formik.values.cta}
              onChange={formik.handleChange}
              error={formik.touched.cta && Boolean(formik.errors.cta)}
              helperText={formik.touched.cta && formik.errors.cta}
            />
            <TextField
              fullWidth
              id="image"
              name="image"
              label="Image URL"
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
            <TextField
              fullWidth
              id="background"
              name="background"
              label="Background"
              value={formik.values.background}
              onChange={formik.handleChange}
              error={formik.touched.background && Boolean(formik.errors.background)}
              helperText={formik.touched.background && formik.errors.background}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditBannerTemplateBs;