# Dr. A. Yogeshwaran Portfolio Website

## Setup Instructions for VS Code

### 1. Download and Extract
- Download `yogeshwaran-portfolio-project.zip`
- Extract to your desired location
- Open the `project` folder in VS Code

### 2. Install Dependencies
Open terminal in VS Code (Ctrl+` or View > Terminal) and run:

```bash
npm install
```

### 3. Environment Variables
The `.env` file is already configured with Supabase credentials. No additional setup needed.

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

Production files will be in the `dist` folder.

---

## Project Structure

```
project/
├── public/
│   └── images/
│       └── WhatsApp_Image_2026-07-06_at_6.53.58_PM.jpeg  (Profile photo)
├── src/
│   ├── App.tsx           (Main component with all sections)
│   ├── index.css         (Custom CSS, animations, Tailwind)
│   ├── main.tsx          (React entry point)
│   └── lib/
│       └── supabase.ts   (Supabase client)
├── supabase/
│   └── migrations/
│       └── 20260707050512_create_contact_messages.sql
├── .env                  (Supabase credentials)
├── tailwind.config.js    (Custom color palette)
├── vite.config.ts        (Vite configuration)
└── package.json          (Dependencies)
```

---

## Features

- **Hero Section** - Professional introduction with photo, stats
- **About Me** - Academic profile with Research Identifiers and Personal cards
- **Education** - Timeline with Ph.D, M.E, B.E degrees
- **Experience** - Teaching career at DSEC
- **Research Interests** - 6 areas with icons (Wireless, Antenna, RF, IoT, etc.)
- **Publications** - 24 Journal papers + 19 Conference papers
- **Patents** - 2 filed patents
- **Books** - 5 books + 2 book chapters
- **Awards** - Recognition and Activities
- **Contact Form** - Stores messages in Supabase database

---

## Technologies Used

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- Supabase (backend for contact form)

---

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- `gold` - Primary accent (warm amber)
- `charcoal` - Dark backgrounds
- `warm` - Background tones

### Content
All data is in `src/App.tsx` as constants:
- `EDUCATION`, `EXPERIENCE`, `JOURNALS`, `CONFERENCES`, etc.

Update these arrays to change displayed content.
