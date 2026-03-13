# AgriInvest Indonesia

A professional website presenting agricultural investment opportunities in Lampung Utara and Maluku provinces of Indonesia. Built with Jekyll for deployment on GitHub Pages.

## 🌾 Overview

This website provides:
- **Regional Profiles**: Detailed analysis of Lampung Utara and Maluku
- **Commodity Analysis**: Priority crops with yield potential, market analysis, and ROI horizons
- **Program Mapping**: Kementan support programs and eligibility requirements
- **Action Roadmap**: Phased implementation plan

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7+ (for local development)
- Bundler gem
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agri-investment.git
   cd agri-investment
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**
   Open [http://localhost:4000](http://localhost:4000)

### Live Reload (Optional)

For automatic page refresh during development:
```bash
bundle exec jekyll serve --livereload
```

## 📁 Project Structure

```
agri-investment-site/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── _layouts/                # HTML templates
│   ├── default.html         # Main layout
│   ├── page.html            # Standard page
│   └── region.html          # Region detail page
├── _includes/               # Reusable components
│   ├── header.html          # Navigation header
│   ├── footer.html          # Site footer
│   ├── commodity-card.html  # Commodity info card
│   ├── program-table.html   # Kementan program table
│   ├── chart-container.html # Chart wrapper
│   └── map-container.html   # Map wrapper
├── _sass/                   # SCSS stylesheets
│   ├── _variables.scss      # Colors, fonts, spacing
│   ├── _base.scss           # Reset and base styles
│   ├── _layout.scss         # Grid and layout
│   └── _components.scss     # UI components
├── assets/
│   ├── css/main.scss        # Main stylesheet
│   ├── js/main.js           # Core JavaScript
│   ├── js/maps.js           # Leaflet map configs
│   └── js/charts.js         # Chart.js configs
├── index.md                 # Homepage
├── lampung-utara/           # Lampung Utara pages
│   ├── index.md             # Overview
│   ├── commodities.md       # Commodity details
│   └── programs.md          # Kementan programs
├── maluku/                  # Maluku pages
│   ├── index.md             # Overview
│   ├── commodities.md       # Commodity details
│   └── programs.md          # Kementan programs
├── roadmap/                 # Roadmap page
│   └── index.md
└── about/                   # About page
    └── index.md
```

## 🌐 Deployment to GitHub Pages

### Option 1: Direct Deployment (Recommended)

1. **Create a GitHub repository**
   - Go to GitHub and create a new repository
   - Name it `yourusername.github.io` for root domain, or any name for subdirectory

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/agri-investment.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Click Save

4. **Access your site**
   - Root domain: `https://yourusername.github.io`
   - Subdirectory: `https://yourusername.github.io/agri-investment`

### Option 2: Custom Domain

1. **Add CNAME file**
   Create a file named `CNAME` in the root directory with your domain:
   ```
   agri-invest.yourcompany.com
   ```

2. **Configure DNS**
   Add a CNAME record pointing to `yourusername.github.io`

3. **Enable HTTPS**
   - Go to Settings → Pages
   - Check "Enforce HTTPS"

## 🎨 Customization

### Colors

Edit `_sass/_variables.scss` to change the color scheme:

```scss
// Primary Colors
$color-primary: #2D5A27;         // Deep forest green
$color-accent: #D4A84B;          // Gold/Amber

// Region-specific
$color-lampung: #2D5A27;         // Green
$color-maluku: #1E5F8A;          // Blue
```

### Typography

The site uses Inter font from Google Fonts. To change:

1. Update the font link in `_layouts/default.html`
2. Update `$font-family-primary` in `_sass/_variables.scss`

### Adding Content

1. **New Page**: Create a `.md` file with front matter
   ```yaml
   ---
   layout: page
   title: "New Page"
   ---
   
   Content here...
   ```

2. **New Region**: Copy the `lampung-utara/` folder structure and update content

## 📊 Features

### Interactive Maps

The site uses Leaflet.js for interactive maps:
- Indonesia overview with both regions
- Lampung Utara agricultural zones
- Maluku archipelago with production areas

### Charts

Chart.js powers the data visualizations:
- GRDP contribution charts
- ROI horizon comparisons
- LER (Land Equivalent Ratio) comparisons
- Production growth trends

### Responsive Design

The site is fully responsive:
- Mobile-first approach
- Tablet and desktop breakpoints
- Touch-friendly navigation

## 🔧 Troubleshooting

### Common Issues

1. **Build fails on GitHub Pages**
   - Check that all gems in Gemfile are supported by GitHub Pages
   - Verify `_config.yml` syntax

2. **CSS not loading**
   - Ensure `main.scss` has front matter (`---`)
   - Check file paths use `relative_url` filter

3. **Maps not displaying**
   - Verify Leaflet CSS and JS are loading
   - Check map container has defined height

4. **Charts not rendering**
   - Ensure Chart.js is loaded before `charts.js`
   - Check canvas elements have unique IDs

### Local Build Issues

```bash
# Clear Jekyll cache
bundle exec jekyll clean

# Update dependencies
bundle update

# Check for Ruby version issues
ruby -v  # Should be 2.7+
```

## 📝 Content Updates

### Updating Commodity Data

1. Navigate to the region's `commodities.md` file
2. Update the relevant sections
3. Ensure data status labels are accurate:
   - `<span class="data-status confirmed">Confirmed</span>`
   - `<span class="data-status assumption">Assumption</span>`
   - `<span class="data-status uncertain">Uncertain</span>`

### Adding New Programs

1. Edit the region's `programs.md` file
2. Add a new row to the program table
3. Include all required columns

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical issues or content updates, contact the project team.

---

*Built with Jekyll • Hosted on GitHub Pages*
