# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **YorkHub** - a professional LLM API gateway homepage built as a compatibility layer for OpenAI API. The project provides a unified interface for managing multiple AI models including OpenAI, Claude, and Gemini.

## Technology Stack

- **Runtime**: Deno with TypeScript support
- **Backend**: `Deno.serve()` HTTP server (minimal 19-line implementation)
- **Frontend**: Vanilla HTML5/CSS3/JavaScript (contained in a single file)
- **Dependencies**: Deno Standard Library (JSR modules)
- **Architecture**: Server-side rendering with dynamic template injection

## Development Commands

### Primary Development
```bash
deno task dev    # Start development server with file watching
```

### Running the Server
```bash
deno run --allow-read --allow-net main.ts
```

## Key Architecture Patterns

### 1. Single File Application Architecture
The frontend is entirely contained in `index.html` (1,052 lines) using modern vanilla JavaScript with no framework dependencies.

### 2. Dynamic Template Injection
The Deno server injects environment variables into the HTML at runtime using `GATEWAY_BASE_URL` configuration.

### 3. CSS Custom Properties Theming
Advanced theme system supporting light, dark, and auto modes with CSS custom properties and JavaScript theme persistence.

### 4. Component-Based Structure
Despite being a single file, the code is organized into logical components:
- `HeroSection`: Landing section with title and description
- `StatsSection`: Animated statistics display
- `FeatureGrid`: Feature cards with hover effects
- `CopyButton`: Copy-to-clipboard functionality
- `ThemeSwitcher`: Light/dark theme toggle
- `NotificationSystem`: Toast-style notifications

## Project Structure

```
/
├── main.ts          # Deno server (19 lines)
├── index.html       # Complete frontend application
├── deno.json        # Deno configuration with JSR dependencies
├── deno.lock        # Dependency lock file
└── CLAUDE.md        # This file
```

## Important Configuration

### Deno Configuration (deno.json)
```json
{
  "tasks": {
    "dev": "deno run --allow-read --allow-net --watch main.ts"
  },
  "imports": {
    "@std/assert": "jsr:@std/assert@1"
  }
}
```

### Environment Variables
- `GATEWAY_BASE_URL`: Base URL for the API gateway (default: "http://localhost:8000")

## Code Conventions

### TypeScript (main.ts)
- Uses modern TypeScript features
- Minimal server implementation with `Deno.serve()`
- Dynamic HTML template injection using environment variables

### HTML/CSS/JavaScript (index.html)
- **HTML5**: Semantic elements, proper meta tags, responsive meta viewport
- **CSS3**: Custom properties for theming, flexbox/grid layouts, animations
- **JavaScript**: ES6+ features, modern DOM APIs, no jQuery or framework dependencies
- **Theme System**: CSS custom properties with JavaScript synchronization
- **Responsive Design**: Mobile-first approach with media queries

## Development Notes

### Frontend Modifications
All changes to the UI, styling, or client-side functionality should be made in `index.html`. The file is structured with:
- `<head>`: Meta tags, theme styles, component CSS
- `<body>`: HTML structure and inline JavaScript
- Component functions defined within `<script>` tags

### Server Modifications
The server logic in `main.ts` is minimal. Changes typically involve:
- Adding new environment variables for template injection
- Modifying server configuration or CORS settings
- Adding new JSR dependencies

### Theme System
The theme system uses:
- CSS custom properties defined in `:root` and `[data-theme="dark"]`
- JavaScript to persist theme preference in localStorage
- Automatic theme detection based on system preference
- Smooth transitions between themes

### Performance Considerations
- No external dependencies for optimal performance
- All CSS and JavaScript inline to minimize HTTP requests
- Uses modern browser features for animations and interactions
- Mobile-responsive design with touch-friendly interactions

## File Watching and Development

The project includes file watching for development:
- Run `deno task dev` to start the server with auto-reload
- Changes to `main.ts` will restart the server
- Changes to `index.html` require browser refresh

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- CSS Custom Properties support
- LocalStorage API for theme persistence