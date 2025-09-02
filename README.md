# Premium Realty - Modern Real Estate Website

A modern, responsive real estate website built with Next.js, React, and Tailwind CSS.

## Features

- **Homepage**: Hero banner with carousel, featured properties, quick search
- **Property Listings**: Grid layout with filters and property cards
- **Property Details**: Image gallery, detailed info, contact modal
- **Favorites & Compare**: Save and compare properties (local state)
- **About Us**: Team information and company story
- **Contact**: Contact form and map placeholder
- **Blog**: Real estate articles and insights
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Project Structure

```
premium-realty/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── PropertyCard.js
│   │   ├── PropertyFilters.js
│   │   ├── PropertyGallery.js
│   │   ├── ContactModal.js
│   │   ├── FeaturedProperties.js
│   │   ├── QuickSearch.js
│   │   ├── WhyChooseUs.js
│   │   └── BlogCard.js
│   ├── data/
│   │   └── sampleData.js
│   ├── properties/
│   │   ├── page.js
│   │   └── [id]/page.js
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── blog/
│   │   └── page.js
│   ├── favorites/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sample Data

The website uses static sample data for demonstration purposes:

- 6 sample properties with images, details, and agent information
- 6 blog posts with categories and content
- Team member information
- All data is stored in `app/data/sampleData.js`

## Key Features Implemented

### Design & UX

- Modern, clean design with blue/white/gray color scheme
- Smooth animations and hover effects
- Mobile-responsive layout
- Professional typography using Inter font

### Functionality (UI Only)

- Property search filters (static UI)
- Image galleries with lightbox
- Favorites and compare functionality (local state)
- Contact forms (non-functional, shows alerts)
- Property carousel on homepage
- Responsive navigation with mobile menu

### Components

- Reusable property cards
- Modal components for contact forms
- Image gallery with navigation
- Filter components
- Blog article cards

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **JavaScript**: ES6+ features

## Customization

### Adding New Properties

Edit `app/data/sampleData.js` and add new property objects to the `properties` array.

### Styling

Modify `tailwind.config.js` for custom colors, animations, and design tokens.

### Components

All components are in `app/components/` and can be easily modified or extended.

## Production Considerations

For a production version, consider adding:

- Backend API integration
- Database for properties and user data
- User authentication
- Payment processing
- SEO optimization
- Performance monitoring
- Form validation
- Real map integration (Google Maps API)
- Search functionality
- Property management system

# Test staging deployment
