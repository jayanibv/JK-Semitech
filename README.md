# JK SemiTech

Welcome to the **JK SemiTech** platform—a modern, high-performance, and responsive portal designed for a forward-thinking education, internship, and technology company.

This project is built using a modern full-stack architecture: a tech-forward, animated **React/Next.js** frontend combined with a lightweight, robust **Python FastAPI** backend boilerplate.

---

## 📂 Project Architecture

The project is structured into two main directories:

```text
JK-Semitech/
├── backend/            # Python FastAPI backend boilerplate
│   ├── api/            # API routers & controllers
│   ├── main.py         # App initialization & CORS setup
│   └── requirements.txt# Python dependencies
│
├── frontend/           # Next.js frontend application
│   ├── public/         # Static assets (logos, icons)
│   ├── src/
│   │   ├── app/        # Next.js App Router (Layouts & Pages)
│   │   └── components/ # Reusable custom React components
│   ├── package.json    # Node dependencies
│   └── tsconfig.json   # TypeScript settings
│
└── .gitignore          # Unified root-level gitignore
```

---

## ⚡ Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (App Router + TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 inline theme custom values)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid transitions, layout animations, and infinite marquees
- **Icons**: [Lucide React](https://lucide.dev/) + Optimized Inline SVGs
- **Theme**: Futuristic premium Dark Mode utilizing electric blue and deep violet accent colors, frosted glassmorphism card layouts, and subtle drop shadows.

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **ASGI Server**: [Uvicorn](https://www.uvicorn.org/)
- **CORS Config**: Pre-configured middleware allowing seamless API requests from the frontend sandbox.

---

## ✨ Features & Upgrades

1. **Responsive Glassmorphic Navigation Bar**: Adaptive mobile hamburger menu, frosted glass on-scroll backdrop, and a pulsing register button linking to the enrollment form.
2. **Interactive Hero Section**: Staggered entrance animations featuring 3D orbiting tech bubbles (AI/ML, VLSI, Eco-Tech).
3. **Core Services Grid**: Interactive hover cards with neon glow borders matching the services: Mini Projects, Final Year Projects, Internships, Capstone, Hydroponics, and more.
4. **Dynamic Tech Marquee**: Dual-direction infinite scrolling badges highlighting technical domains (VLSI, IoT, AI, Web Dev).
5. **Interactive Contacts & WhatsApp Integration**: 
   - Office hours and mail tags linked directly.
   - Contact numbers individually bound to WhatsApp (`wa.me`) click-to-chat triggers with a pre-filled friendly greeting.
6. **Dynamic Subpage Routing**: Clean dynamic layouts for all 10 services at `/services/[slug]`.
7. **Interactive Solar Panel Estimator**: 
   - Slider control to estimate required panels, standard output (kWp), and daily solar generation yield (kWh).
   - Custom installation inquiry form that formats user inputs and generates a direct link to send the report instantly to JK SemiTech via WhatsApp or Email.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later)
- [Python](https://www.python.org/) (v3.10 to v3.12 recommended)
- Git

---

### Setup Instructions

#### 1. Running the FastAPI Backend
Open a terminal window and execute:
```bash
# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv venv
# On Windows (PowerShell):
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the development server
python main.py
```
- The backend API will be running at: **`http://localhost:8000`**
- Check the API status endpoint: [http://localhost:8000/api/status](http://localhost:8000/api/status)

#### 2. Running the Next.js Frontend
Open a **separate** terminal window and execute:
```bash
# Navigate to the frontend directory
cd frontend

# Install Node dependencies
npm install

# Run the development server
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Deploying & Production Build
To verify type-safety and bundle efficiency for the production build, compile the Next.js app:
```bash
cd frontend
npm run build
```
The build process compiles successfully, generating fully optimized static and server-rendered routes on demand.
