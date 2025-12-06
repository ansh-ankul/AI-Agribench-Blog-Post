# AI-AgriBench Website

A single-page, linear research website for the AI-AgriBench project - a comprehensive benchmark for evaluating large language models on agricultural question-answering tasks.

## Project Structure

```
ai-agribench/
├── index.html              # Single-page website with all content
├── index_multi.html        # Backup of original multi-page version
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with smooth scrolling
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── img/
│       ├── logo.svg        # Project logo
│       └── og.png          # Open Graph image
└── README.md               # This file
```

## Features

- **Single Linear Page**: All content flows in one continuous page
- **Smooth Scrolling Navigation**: Click navigation links to smoothly scroll to sections
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Accessibility**: Skip links, proper focus management, and ARIA labels
- **Interactive Elements**: Sortable tables, search functionality, and form validation
- **Academic Style**: Clean, professional design suitable for research projects

## Content Sections

The single page includes all sections in linear order:

1. **Home** - Hero section, stats, features, and partners
2. **Overview** - Data sources and methodology
3. **Pipeline** - Data processing pipeline with SVG diagram
4. **Dataset** - Dataset structure, schema, and categories
5. **Leaderboard** - Model performance table with sorting and search
6. **Evaluation** - Guidelines, folder layout, and pseudocode
7. **Paper** - Abstract, BibTeX, and citation information
8. **FAQ** - Frequently asked questions
9. **Team** - Research team and collaborating institutions
10. **Contact** - Contact form and information

## Customization

### Editing Content

1. **Text Content**: Edit the HTML file directly to update text, headings, and descriptions
2. **FAQ Entries**: Add new questions and answers in the FAQ section
3. **Team Members**: Update team information in the Team section
4. **Contact Information**: Modify contact details in the Contact section

### Adding Leaderboard Entries

To add new model results to the leaderboard:

1. Open `index.html`
2. Find the leaderboard table in the Leaderboard section
3. Add a new row with the following structure:

```html
<tr>
    <td>Model Name</td>
    <td>Parameters</td>
    <td>Modality</td>
    <td>Judge/Metric Type</td>
    <td>EM X.X / F1 X.X</td>
    <td>Split</td>
    <td>Date</td>
    <td><a href="#">Paper Link</a></td>
    <td><a href="#">Code Link</a></td>
    <td>Notes</td>
</tr>
```

### Replacing Images

1. **Logo**: Replace `assets/img/logo.svg` with your project logo
2. **Open Graph Image**: Replace `assets/img/og.png` with a 1200x630px image for social media sharing
3. **Team Photos**: Add team member photos to the `assets/img/` directory and update the team section

### Styling Changes

- **Colors**: Modify CSS variables in `assets/css/style.css` (lines 1-20)
- **Typography**: Update font families and sizes in the CSS
- **Layout**: Adjust container widths, spacing, and grid layouts
- **Section Spacing**: Modify `.section` margin-bottom in CSS for different spacing

## Navigation

The website uses smooth scrolling navigation:

- **Header Navigation**: Click any link to smoothly scroll to that section
- **Mobile Menu**: Hamburger menu for mobile devices
- **Skip Link**: Accessibility feature to jump to main content

## Publishing

### GitHub Pages

1. Push the repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://username.github.io/repository-name`

### Other Static Hosting

The website is a collection of static files and can be hosted on any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the repository and deploy
- **AWS S3**: Upload files to an S3 bucket with static website hosting
- **Any web server**: Upload files to your web server's document root

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This website template is provided for the AI-AgriBench research project. Please refer to the project's main license for usage terms.

## Contributing

To contribute to the website:

1. Make your changes to the HTML, CSS, or JavaScript files
2. Test the changes locally by opening `index.html` in a web browser
3. Ensure all functionality works (dark mode, mobile menu, form validation, smooth scrolling)
4. Submit a pull request with a description of your changes

## Technical Notes

- No build tools or external dependencies required
- Uses vanilla JavaScript for all interactions
- CSS Grid and Flexbox for responsive layouts
- Local storage for theme persistence
- Clipboard API for copy-to-clipboard functionality
- Form validation with inline error messages
- Smooth scrolling for single-page navigation
