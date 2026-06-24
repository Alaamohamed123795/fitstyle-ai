# FitStyle AI 👗✨

> An AI-powered fashion styling platform that helps shoppers find personalized outfit recommendations based on occasion, body type, and personal style — powered by a multi-model AI pipeline (Qwen2.5-VL, Google Gemma, Groq/Llama, and Kolors) and Firebase.

---

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [User Roles](#user-roles)
- [Project Structure](#project-structure)
- [System Dependencies](#system-dependencies)

---

## Project Overview

FitStyle AI is a full-stack web application that bridges the gap between boutique fashion and AI-powered personalization. Shoppers receive smart outfit recommendations tailored to their event type (e.g., Wedding, Formal, Casual, Party), while administrators manage the product catalog with photo uploads directly to Firebase Storage.

---

## Features

| Feature | Description |
|---|---|
| 🤖 AI Outfit Recommendations | Powered by  Groq (Llama-3.3-70B) |
| 👗 Virtual Fitting Studio | Try on outfits virtually using pose detection |
| 📸 Admin Photo Upload | Upload garment photos to Firebase Storage |
| 🎉 Occasion-Based Filtering | Filter products by Wedding, Formal, Casual, Party |
| 📊 Sales Analytics Dashboard | View sales trends and performance metrics |
| 💾 Save & Export Looks | Save outfits and export as PDF |
| 🔐 Firebase Authentication | Secure login for shoppers and admins |
| 📱 Responsive Design | Works on desktop and mobile |

---

## Tech Stack

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS v4
- Vite 6
- Recharts (analytics)
- TensorFlow.js / PoseNet (pose detection)
- jsPDF (PDF export)

**Backend:**
- Express.js (Node.js server)
- TypeScript (`tsx` for dev)

**AI & External Services:**
- Qwen2.5-VL-72B via OpenRouter (body shape & measurement analysis)
- Google Gemma (gemma-3-4b-it) (clothing size computation)
- Groq — Llama-3.3-70B (outfit recommendation & styling engine)
- Kolors Virtual Try-On via Hugging Face Spaces (photorealistic try-on rendering)
- Firebase Authentication
- Firebase Firestore (database)
- Firebase Storage (photo storage)
- EmailJS (email notifications)
- Gradio Client (AI model integration)

---

## Prerequisites

Make sure you have the following installed before running the project:

- **Node.js** v18 or higher → [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- A **Firebase project** with Firestore and Storage enabled
- An **OpenRouter API key** (for Qwen2.5-VL body analysis) → [Get one here](https://openrouter.ai/)
- A **Groq API key** (for outfit recommendations) → [Get one here](https://console.groq.com/)
- A **Google Gemma API key** (for size calculation) → [Get one here](https://aistudio.google.com/app/apikey)

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/fitstyle-ai.git
cd fitstyle-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your keys:

```bash
cp .env.example .env
```

Then open `.env` and add your credentials (see [Environment Variables](#environment-variables) below).

### 4. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Enable **Authentication** (Email/Password)
4. Enable **Firestore Database**
5. Enable **Storage**
6. Copy your Firebase config into the `.env` file

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# AI Model APIs
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_GEMMA_API_KEY=your_gemma_api_key_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS (optional - for email notifications)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Never commit your `.env` file to GitHub.** It is already listed in `.gitignore`.

---

## Running the App

### Development Mode

```bash
npm run dev
```

This starts both the Express backend and Vite frontend dev server. Open your browser at:

```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Type Checking (Lint)

```bash
npm run lint
```

---

## User Roles

### 👤 Shopper
- Browse the product catalog
- Get AI-powered outfit recommendations by occasion
- Use the Virtual Fitting Studio
- Save and export looks as PDF
- View trending styles

### 🛠️ Admin
- Access the Admin Dashboard
- Add / edit / delete garments
- Upload product photos (stored in Firebase Storage)
- View sales analytics and performance reports
- Manage user accounts

> To create an admin account, run the seed script:
> ```bash
> npx tsx seed-admin.ts
> ```

---

## Project Structure

```
fitstyle-ai/
├── src/
│   ├── components/
│   │   ├── AdminDashboard.tsx       # Admin panel with product management
│   │   ├── LandingPage.tsx          # Home / landing page
│   │   ├── LoginView.tsx            # Authentication UI
│   │   ├── ShopperStudioView.tsx    # Virtual fitting studio (AI core)
│   │   ├── TrendingPage.tsx         # Occasion-based trending looks
│   │   ├── MyLooksPage.tsx          # Saved outfits
│   │   ├── WardrobePage.tsx         # User wardrobe
│   │   └── SalesAnalyticsDashboard.tsx  # Admin analytics
│   ├── data/
│   │   └── fallbackProducts.ts      # Static fallback product data
│   ├── utils/
│   │   └── poseDetection.ts         # TensorFlow PoseNet integration
│   ├── firebase.ts                  # Firebase initialization
│   ├── types.ts                     # TypeScript type definitions
│   ├── App.tsx                      # Root component + routing
│   └── main.tsx                     # App entry point
├── server.ts                        # Express backend server
├── seed.ts                          # Database seeding script
├── seed-admin.ts                    # Admin account creation
├── firestore.rules                  # Firestore security rules
├── storage.rules                    # Firebase Storage security rules
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.example                     # Environment variable template
```

---

## System Dependencies

| Dependency | Version | Purpose |
|---|---|---|
| react | ^19.0.1 | UI framework |
| typescript | ~5.8.2 | Type safety |
| vite | ^6.2.3 | Build tool & dev server |
| express | ^4.21.2 | Backend server |
| firebase | ^12.14.0 | Auth, Firestore, Storage |
|openrouter (Qwen2.5-VL)| free tier | Body shape & skin tone analysis |
|Google Gemma (gemma-3-4b-it)|free tier|Clothing size calculation|
|Groq (Llama-3.3-70B)| free tier |Outfit & styling recommendation|
|Kolors (Hugging Face)|free, no key|Virtual try-on rendering|
| @tensorflow/tfjs | ^4.22.0 | Machine learning |
| @tensorflow-models/posenet | ^2.2.2 | Pose detection |
| tailwindcss | ^4.1.14 | CSS styling |
| recharts | ^3.8.1 | Analytics charts |
| jspdf | ^4.2.1 | PDF export |
| lucide-react | ^0.546.0 | Icons |
| motion | ^12.23.24 | Animations |

---

## License

This project was developed as part of **CISC 818 – Software Engineering with AI** at Queen's University.

---

*Built with ❤️ using React, Firebase, and Google Gemini AI*
