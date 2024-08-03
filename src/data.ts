import { Banner } from './types';

export const initialBanners: Banner[] = [
  {
    id: '1',
    title: 'Summer Sale',
    description: 'Get up to 50% off on all summer items!',
    cta: 'Shop Now',
    image: '/images/summer-sale.jpg',
    background: 'linear-gradient(45deg, #FFC107, #FF9800)',
  },
  {
    id: '2',
    title: 'New Arrivals',
    description: 'Check out our latest collection!',
    cta: 'View Collection',
    image: '/images/new-arrivals.jpg',
    background: 'linear-gradient(45deg, #2196F3, #03A9F4)',
  },
  // Add more banner objects as needed
];