import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Banner } from '../types';
import { initialBanners } from '../data';

interface BannerContextType {
  banners: Banner[];
  updateBanner: (updatedBanner: Banner) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);

  const updateBanner = (updatedBanner: Banner) => {
    setBanners((prevBanners) =>
      prevBanners.map((banner) => (banner.id === updatedBanner.id ? updatedBanner : banner))
    );
  };

  return (
    <BannerContext.Provider value={{ banners, updateBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (context === undefined) {
    throw new Error('useBannerContext must be used within a BannerProvider');
  }
  return context;
};