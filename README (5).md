<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0e1a,50:1a237e,100:4d9fff&height=200&section=header&text=🚀%20SPACE%20EXPLORER&fontSize=50&fontColor=ffffff&fontAlignY=35&desc=Explore%20the%20Universe%20from%20Your%20Browser&descAlignY=55&descSize=18&animation=fadeIn" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=22&duration=3000&pause=1000&color=4D9FFF&center=true&vCenter=true&multiline=true&width=600&height=80&lines=🌌+Journey+Through+the+Solar+System;🪐+8+Planets+%7C+290%2B+Moons+%7C+Infinite+Wonder" alt="Typing SVG" />

<br/><br/>

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-FF6B35?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-9B5DE5?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/ritu25mib10064-pixel/space-explorer?style=for-the-badge&color=FFD700&logo=github)](https://github.com/ritu25mib10064-pixel/space-explorer/stargazers)

<br/>

> *"The cosmos is within us. We are made of star-stuff."* — Carl Sagan

<br/>

[🌐 Live Demo](#) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/ritu25mib10064-pixel/space-explorer/issues) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/ritu25mib10064-pixel/space-explorer/issues) &nbsp;·&nbsp; [⭐ Star this Repo](https://github.com/ritu25mib10064-pixel/space-explorer)

</div>

---

<div align="center">

## 🌌 What is Space Explorer?

</div>

**Space Explorer** is a visually stunning, fully interactive solar system web app built with **React** and **TypeScript**. Dive into the cosmos and explore all 8 planets — their moons, temperatures, distances from the Sun, and mind-blowing fun facts — all wrapped in a beautiful dark space-themed UI with live animations.

Whether you're a space nerd or just curious about the universe — this app is for you. 🌠

---

<div align="center">

## ✨ Features

</div>

<table align="center">
<tr>
<td align="center" width="200">

**🌟 Starfield Canvas**
<br/>
200+ twinkling animated stars in the background

</td>
<td align="center" width="200">

**🌀 Live Orbits**
<br/>
Animated planetary orbits in the hero section

</td>
<td align="center" width="200">

**🪐 All 8 Planets**
<br/>
Every planet with rich data and beautiful cards

</td>
</tr>
<tr>
<td align="center" width="200">

**🔍 Planet Detail View**
<br/>
Click any planet for in-depth stats and facts

</td>
<td align="center" width="200">

**🎯 Smart Filters**
<br/>
Filter by Terrestrial, Gas Giant, Ice Giant

</td>
<td align="center" width="200">

**📱 Fully Responsive**
<br/>
Looks stunning on mobile, tablet & desktop

</td>
</tr>
</table>

---

<div align="center">

## 🪐 Meet the Planets

</div>

| # | Planet | Type | Moons | Distance from Sun | Temperature | Fun Fact |
|---|--------|------|-------|-------------------|-------------|----------|
| ☿ | **Mercury** | Terrestrial | 0 | 57.9M km | -180°C to 430°C | A year = only 88 Earth days! |
| ♀ | **Venus** | Terrestrial | 0 | 108.2M km | 462°C avg | Rotates backwards! |
| 🌍 | **Earth** | Terrestrial | 1 | 149.6M km | -88°C to 58°C | Only planet with life! |
| ♂ | **Mars** | Terrestrial | 2 | 227.9M km | -87°C to -5°C | Has the biggest volcano! |
| ♃ | **Jupiter** | Gas Giant | 95 | 778.5M km | -108°C | Could fit all planets inside! |
| ♄ | **Saturn** | Gas Giant | 146 | 1.43B km | -139°C | Rings only 10m thick! |
| ♅ | **Uranus** | Ice Giant | 28 | 2.87B km | -197°C | Rolls on its side! |
| ♆ | **Neptune** | Ice Giant | 16 | 4.5B km | -201°C | 1 year = 165 Earth years! |

---

<div align="center">

## 🛠️ Tech Stack

</div>

<div align="center">

| Technology | Purpose | Why? |
|-----------|---------|------|
| ⚛️ **React 18** | UI Framework | Component-based, fast rendering |
| 📘 **TypeScript** | Type Safety | Fewer bugs, better code |
| 🎨 **CSS3 Animations** | Orbits, floats, twinkles | Smooth 60fps animations |
| 🖼️ **HTML5 Canvas** | Starfield background | Performant star rendering |
| 🔤 **Google Fonts** | Orbitron + Exo 2 | Futuristic space aesthetic |
| 🚀 **Create React App** | Build tooling | Zero config setup |

</div>

---

<div align="center">

## 📁 Project Structure

</div>

```
🚀 space-explorer/
│
├── 📁 public/
│   ├── 🌐 index.html          # App entry HTML
│   └── 📋 manifest.json       # PWA config
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🧭 Navbar.tsx       # Navigation bar
│   │   ├── 🌠 Hero.tsx         # Hero + orbit animation
│   │   ├── 🃏 PlanetCard.tsx   # Planet preview cards
│   │   ├── ✨ StarField.tsx    # Canvas star background
│   │   └── 🔗 Footer.tsx       # Footer with links
│   │
│   ├── 📁 pages/
│   │   └── 🔭 PlanetDetail.tsx # Full planet detail view
│   │
│   ├── 📁 styles/
│   │   └── 🎨 global.css       # All styles & animations
│   │
│   ├── 🏠 App.tsx              # Root component + data
│   └── ⚡ index.tsx            # React entry point
│
├── 🚫 .gitignore
├── 📦 package.json
├── 📘 tsconfig.json
└── 📖 README.md
```

---

<div align="center">

## 🚀 Getting Started

</div>

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Run Locally

```bash
# Step 1: Clone the repo
git clone https://github.com/ritu25mib10064-pixel/space-explorer.git

# Step 2: Go into the project
cd space-explorer

# Step 3: Install dependencies
npm install

# Step 4: Start the app 🚀
npm start
```

✅ App opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

<div align="center">

## 🤝 Contributing

</div>

Contributions make the open-source community such an amazing place! Any contribution you make is **greatly appreciated** 💙

```bash
# Fork → Clone → Create Branch → Commit → Push → Pull Request
git checkout -b feature/YourAmazingFeature
git commit -m "✨ Add YourAmazingFeature"
git push origin feature/YourAmazingFeature
```

---

<div align="center">

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👩‍💻 Made by

**Ritu Yadav** &nbsp;|&nbsp; [@ritu25mib10064-pixel](https://github.com/ritu25mib10064-pixel)

<br/>

*"To infinity and beyond!"* 🚀

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4d9fff,50:1a237e,100:0a0e1a&height=120&section=footer" width="100%"/>

</div>
