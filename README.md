# AI-AgriBench Website

Single-page research website for AI-AgriBench - a benchmark for evaluating LLMs on agricultural question-answering tasks built from real extension knowledge.

## Structure

```
ai-agribench/
├── index.html              # Main website file
├── assets/
│   ├── css/style.css      # Stylesheet with theme support
│   ├── js/main.js          # JavaScript (theme toggle, FAQ accordion, prompt carousel)
│   └── img/                # Logos and images
└── README.md
```

## Features

Single-page linear layout with smooth scrolling navigation, responsive design, dark/light theme toggle, interactive FAQ accordion, prompt design carousel, leaderboard table, and accessibility features (ARIA labels, skip links).

## Sections

Home (hero, features, audience) → Overview (methodology) → Pipeline (3-stage process with statistics) → Prompt Design (interactive carousel) → Dataset (schema, topic categories, pipeline stats) → Evaluation (scoring, judge models, leaderboard) → FAQ → Team → Contact → Partners

## Deployment

**GitHub Pages**: Push to GitHub, enable Pages in Settings → Pages, select `main` branch. Site available at `https://username.github.io/repo-name`.

**Netlify**: Drag and drop folder or connect Git repository.

**Vercel**: Run `vercel` CLI command or connect via GitHub.

**Static Hosting**: Upload all files to any web server's document root.

## Local Development

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Customization

- **Content**: Edit `index.html` directly
- **Styling**: Modify CSS variables in `assets/css/style.css`
- **Images**: Replace files in `assets/img/`
- **Leaderboard**: Add rows to the leaderboard table in Evaluation section
- **FAQ**: Add items to the FAQ accordion section

## Browser Support

Chrome 60+, Firefox 60+, Safari 12+, Edge 79+

## Technical Stack

Vanilla HTML/CSS/JavaScript, no build tools or dependencies required. Uses CSS Grid/Flexbox, localStorage for theme persistence, and modern JavaScript APIs (Clipboard, Intersection Observer).

