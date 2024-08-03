visit the website : https://ad-banner-project-five.vercel.app/
# Ad Banner Manager

## Overview
This project is a Next.js application with TypeScript that allows users to manage and edit ad banners. Users can view a list of ad banners on the homepage and edit their details through an intuitive interface.

## Features
- Display ad banners on the homepage
- Edit ad banner details including title, description, CTA, image, and background
- Responsive design for various screen sizes
- Form validation for editing banners

## Technical Stack
- Next.js
- TypeScript
- React
- Material-UI
- Formik (for form handling)
- Yup (for form validation)
- Framer Motion (for animations)

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
- `src/components`: Reusable React components
- `src/context`: React context for state management
- `src/pages`: Next.js pages
- `src/types`: TypeScript type definitions
- `src/theme.ts`: Material-UI theme configuration
- `src/data.ts`: Initial banner data

## Editing Banners
To edit a banner:
1. Click the edit icon on any banner
2. Modify the details in the bottom sheet that appears
3. Click 'Save' to update the banner

## Image Handling
To change banner images:
1. Add your image files to the `public/images` directory
2. Update the image URL in the edit form (e.g., "/images/your-new-image.jpg")






