import { useState } from 'react';
import { Banner } from '../types';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import { Container, Typography, Box } from '@mui/material';
import { useBannerContext } from '../context/BannerContext';

export default function Home() {
  const { banners, updateBanner } = useBannerContext();
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEditBanner = (banner: Banner) => {
    setEditingBanner(banner);
  };

  const handleSaveBanner = (updatedBanner: Banner) => {
    updateBanner(updatedBanner);
    setEditingBanner(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom align="center">
        Ad Banners
      </Typography>
      <Box sx={{ mt: 4 }}>
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            banner={banner}
            onEdit={() => handleEditBanner(banner)}
          />
        ))}
      </Box>
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          open={!!editingBanner}
          onClose={() => setEditingBanner(null)}
          onSave={handleSaveBanner}
        />
      )}
    </Container>
  );
}