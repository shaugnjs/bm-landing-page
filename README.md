# BM Company Landing Page

A responsive, multi-page website for BM Outsourcing showcasing their services, activities, and providing application instructions.

## Project Overview

This website serves as the primary online presence for BM Outsourcing, offering visitors comprehensive information about the company's history, services, and activities. The site is designed to be fully responsive, ensuring an excellent user experience across all devices.

### Key Features

- Responsive design for all screen sizes (mobile, tablet, desktop)
- Clean, professional UI with animated elements
- Multi-page site architecture with intuitive navigation
- Contact options through email and Facebook
- Detailed service information and application instructions

## Pages

1. **Home (index.html)** - Company overview and highlights
2. **About (about.html)** - Company history, mission, vision, and team
3. **Services (services.html)** - Detailed service offerings and comparison
4. **Activities (activities.html)** - Past, ongoing, and upcoming company activities
5. **How to Apply (apply.html)** - Application process and instructions
6. **Contact (contact.html)** - Contact information and operating hours

## Technologies Used

- **HTML5** - Page structure and content
- **CSS3** - Styling with custom variables and responsive design
- **JavaScript** - Interactive elements and animations
- **Bootstrap 5** - Framework for responsive layouts and components
- **Font Awesome** - Icon library
- **Google Fonts** - Typography
- **AOS (Animate On Scroll)** - Scroll animations

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime Text, etc.) for making changes

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bm-landing-page.git
   ```

2. Open any HTML file in your web browser to view the website locally.

### Development

This site is built with standard HTML, CSS, and JavaScript without any build tools or preprocessors, making it easy to modify and maintain.

#### File Structure

```
bm-landing-page/
├── index.html                  # Homepage
├── about.html                  # About page
├── services.html               # Services page
├── activities.html             # Activities page
├── apply.html                  # How to Apply page
├── contact.html                # Contact page
├── assets/
│   ├── css/
│   │   └── custom.css          # Main stylesheet with global styles
│   ├── js/
│   │   └── main.js             # Custom JavaScript functionality
│   └── images/                 # All website images
│       ├── logo.png
│       ├── hero-bg.jpg
│       └── ...
└── README.md
```

## Deployment

This site can be deployed using GitHub Pages, Netlify, or any static site hosting service.

### Deploying to GitHub Pages

1. In your GitHub repository, go to Settings > Pages
2. Under "Source", select the "main" branch
3. Click "Save"
4. Your site will be published at `https://yourusername.github.io/bm-landing-page/`

### Deploying to Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings (not needed for this static site)
4. Deploy

## Customization

### Changing Colors

The site uses CSS variables for consistent colors. To change the color scheme, edit the variables in `assets/css/custom.css`:

```css
:root {
  --primary-color: #your-primary-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
  /* other variables */
}
```

### Adding Images

1. Add your images to the appropriate folder in `assets/images/`
2. Update image references in the HTML files

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- Google Fonts for typography
- AOS library for scroll animations