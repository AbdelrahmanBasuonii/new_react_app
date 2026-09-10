# Abdelrahman Basuonii | Full Stack Developer Portfolio

A polished six-page portfolio experience for Abdelrahman Basuonii, a full stack developer focused on building useful, clear, and reliable digital products.

The project combines a personal profile with three fully interactive product demonstrations: a calculator, an e-commerce storefront, and an analytics dashboard.

## Highlights

- Six-page client-side experience: Home, About, Selected Work, Project Lab, Dashboard, and Contact.
- Responsive layout for desktop, tablet, and mobile screens.
- Interactive calculator with expression history and operator handling.
- E-commerce demo with category filters, product cards, and a working cart counter.
- Analytics dashboard with metric cards and a responsive revenue chart.
- Contact form prepared for automatic delivery through Web3Forms.
- Floating portfolio assistant backed by a Vercel serverless API.
- Direct links to Gmail, LinkedIn, and GitHub.
- Reusable JSX components organized by pages, components, and shared data.

## Tech stack

- React
- Vite
- JavaScript / JSX
- CSS
- Lucide React icons
- Web3Forms API for contact submissions

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Contact form setup

The contact form sends messages automatically through Web3Forms. Create an access key at [Web3Forms](https://web3forms.com/), then create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Restart the development server after changing environment variables. The `.env` file is excluded from Git so the access key is not committed.

## Portfolio assistant setup

The chat UI calls `api/chat.js`. Without an AI key, it provides a small built-in FAQ fallback. To enable full AI conversations, add these server-side variables to Vercel or your local `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

`OPENAI_API_KEY` is only read by the backend and is never exposed to the browser.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/       Shared UI and interactive demo components
  pages/            The six portfolio pages
  data.js           Navigation, project, and product data
  App.jsx           Page state and application composition
  main.jsx          React entry point
  styles.css        Shared visual system and responsive styles
```

## Personal links

- Email: abdelrahmanbasuonii@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdelrahman-basuonii-16a011267/
- GitHub: https://github.com/AbdelrahmanBasuonii

## License

This portfolio is a personal project by Abdelrahman Basuonii.
