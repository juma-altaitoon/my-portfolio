# Personal Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
Showcases projects, profile, and case studies with dynamic routing and interactive UI.

---

## 🚀 Features

- Responsive design for desktop and mobile
- Project gallery with details and media carousel
- Three.js animated background on Home
- Sidebar and Navbar navigation
- Contact form integration
- Deployable to GitHub Pages

---

## 📦 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [React Router](https://reactrouter.com/)
- [Formspree](https://formspree.io/) (contact form)
- [gh-pages](https://github.com/tschaub/gh-pages) (deployment)

---

## 🖥️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### Development

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

---

## 🌐 Deployment (GitHub Pages)

1. Update `vite.config.js`:
   ```js
   export default {
     base: '/your-repo-name/', // Replace with your repo name
   }
   ```
2. Build and deploy:
   ```sh
   npm run build
   npm run deploy
   ```
3. Enable GitHub Pages in your repo settings (`gh-pages` branch).

---

## 📝 Customization

- **Profile Info:** Edit `src/assets/data/profile.json`
- **Projects:** Edit `src/assets/data/projects.json`
- **Avatar:** Replace `public/Portfolio_avatar.png`
- **Theme:** Update Tailwind classes and context for custom colors

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
