# 📚 Book Finder

A simple web application to search for books using the Open Library API. Built with React and Tailwind CSS.

## Features

- 🔍 Search for books by title
- 📖 Display book details (cover image, title, author, publish year)
- ⚡ Real-time loading indicators
- 🎨 Clean and modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚨 Error handling for failed requests

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Open Library API** - Free REST API for book data

## API Used

This project uses the [Open Library API](https://openlibrary.org/developers/api):

- **Search Endpoint**: `https://openlibrary.org/search.json?title={bookTitle}`
- **Cover Images**: `https://covers.openlibrary.org/b/id/{coverId}-M.jpg`
- **No API key required** - Free to use

## How to Run

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone github.com/aryankuttarmare14/Aganitha_aassignment
   cd aganitha_ass
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## How to Deploy

### Option 1: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Done!** Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy to CodeSandbox

1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Import" → "GitHub"
3. Paste your repository URL
4. Your app will be live immediately

## Project Structure

```
aganitha_ass/
├── src/
│   ├── components/
│   │   └── BookCard.jsx      # Book card component
│   ├── App.jsx               # Main application
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind CSS
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
