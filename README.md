# SoftSell

SoftSell is a web application built with React, Tailwind CSS, and Framer Motion. The platform features a modern, responsive UI with dark mode support, animated shooting stars, and a new AI-powered customer chat widget for quick user assistance.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes, with automatic detection based on system preferences.
- **Animated UI**: Includes shooting star animations in the hero and contact sections, powered by CSS.
- **AI-Powered Chat Widget**: A floating chat assistant that provides instant responses to common queries about the platform.
- **Form Validation**: Contact form with client-side validation for name, email, company, license type, and message.
- **Smooth Animations**: Framer Motion for entrance animations and interactive button effects.

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, CSS Keyframes
- **Build Tool**: Vite
- **Dependencies**:
  - `react`, `react-dom`
  - `framer-motion` for animations
  - `tailwindcss` for styling
  - `@vitejs/plugin-react` for Vite React support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**:
   ```bash
   git clonehttps://github.com/finix2/softsell.git
   cd softsell
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist` directory.

### Project Structure

```
softsell/
├── public/
│   └── favicon.png
├── src/
│   ├── App.jsx
│   ├── ChatWidget.jsx
│   ├── main.jsx
│   ├── index.css
│   └── favicon.png
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

- `App.jsx`: Main React component with the core UI and contact form logic.
- `ChatWidget.jsx`: AI-powered chat widget component for customer support.
- `index.css`: Tailwind CSS and custom styles (shooting stars, scrollbar).
- `tailwind.config.js`: Tailwind configuration for dark mode and content scanning.
- `vite.config.js`: Vite configuration with React plugin.

## AI-Powered Chat Widget

The chat widget is a floating button (💬) located in the bottom-right corner of the screen. It opens a chat window with an AI assistant that responds to common queries.

### Features
- **Keyword-Based Responses**: Answers questions about how SoftSell works, payment times, license types, and support.
- **Dark Mode Support**: Matches the app’s light/dark theme.
- **Animated**: Uses Framer Motion for smooth open/close animations.
- **Accessible**: Includes `aria-label` for screen reader support.

### Example Queries
- "How does it work?" → Explains the license selling process.
- "What is SoftSell?" → Describes the platform.
- "Payment time?" → Details payment processing.
- "License types?" → Lists supported license types.
- "Support?" → Offers support contact options.

### Customization
To extend the AI functionality, modify the `aiResponses` object in `ChatWidget.jsx` or integrate an external API (e.g., xAI’s Grok API, see [xAI API](https://x.ai/api)).

## Usage

1. **Toggle Dark Mode**: Click the ☀️/🌙 button in the bottom-right corner.
2. **Chat with AI**: Click the 💬 button to open the chat widget and ask questions.
3. **Navigate**: Use the header links (Home, How It Works, Testimonials, Contact) to explore the site.
4. **Submit a Quote**: Fill out the contact form in the "Get In Touch" section with valid details to submit a query.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

© 2025 SoftSell. All rights reserved.

## Contact

For support or inquiries, use the contact form on the site or reach out via the AI chat widget.
