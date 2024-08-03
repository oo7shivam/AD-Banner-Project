import React from 'react';
import { Banner } from '../types';
import { Box, Typography, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { motion } from 'framer-motion';

interface BannerImageCompProps {
  banner: Banner;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEdit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 300, sm: 200 },
          background: banner.background,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          marginBottom: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: 1, zIndex: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            {banner.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {banner.description}
          </Typography>
          <Button variant="contained" color="primary">
            {banner.cta}
          </Button>
        </Box>
        <Box
          component="img"
          src={banner.image}
          alt={banner.title}
          sx={{
            width: { xs: '100%', sm: 150 },
            height: { xs: 150, sm: 150 },
            objectFit: 'cover',
            marginTop: { xs: 2, sm: 0 },
          }}
        />
        <EditIcon
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            cursor: 'pointer',
            zIndex: 2,
          }}
          onClick={onEdit}
        />
      </Paper>
    </motion.div>
  );
};

export default BannerImageComp;