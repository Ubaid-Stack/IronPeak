# 🏋️ Iron Peak
### Modern Fitness & Gym Landing Page

A modern, responsive **fitness and gym landing page** built with **React, TypeScript, Vite, and Tailwind CSS**. This project was created as a practice project to strengthen my front-end development skills by building a premium one-page website with reusable components, smooth scrolling, responsive layouts, and motion-based UI animations.

## 🌐 Live Demo

🔗 **https://iron-peak-amber.vercel.app/**

---

## 📖 Overview

Iron Peak is a premium single-page gym website designed to showcase a modern fitness brand with a smooth user experience and clean UI.

The website follows a marketing-focused landing page structure, guiding visitors through the brand story, available programs, membership plans, testimonials, and contact information—all within a single scrolling experience.

---

## ✨ Features

- ✅ Fully responsive design
- ✅ Modern dark UI with premium styling
- ✅ Smooth scrolling navigation
- ✅ Active section scroll spy
- ✅ Mobile-friendly navigation menu
- ✅ Reusable React components
- ✅ Animated section reveals
- ✅ Staggered card animations
- ✅ Data-driven content architecture
- ✅ Pricing cards with featured plan
- ✅ FAQ accordion
- ✅ Testimonials section
- ✅ Contact section with form UI
- ✅ Vercel Analytics integration

---

## 🖥️ Sections

- Hero
- About
- Programs
- Why Choose Us
- Team
- Membership
- FAQ
- Testimonials
- Contact
- Footer

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Motion | Animations |
| Lucide React | Icons |
| React Icons | Additional Icons |
| Vercel Analytics | Website Analytics |

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── FAQ/
│   ├── Footer/
│   ├── Hero/
│   ├── Membership/
│   ├── Navbar/
│   ├── OurTeam/
│   ├── Program/
│   ├── Testimonial/
│   └── WhyUsSection/
│
├── constants/
├── data/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ How It Works

The application is composed inside `App.tsx`, where each major section is wrapped using a reusable `PageSection` component.

Navigation is powered by an `IntersectionObserver`, allowing the active navigation item to update automatically as users scroll through the page.

Shared navigation links are stored in:

```text
src/constants/navLinks.ts
```

Image imports are centralized in:

```text
src/data/images.ts
```

Global styling, CSS variables, gradients, and smooth scrolling behavior are defined in:

```text
src/index.css
```

---

## 📌 Section Details

### 🧭 Navbar

- Desktop & mobile navigation
- Active section highlighting
- Responsive menu
- CTA button

### 🚀 Hero

- Bold headline
- Call-to-action buttons
- Supporting content
- Hero imagery

### 💪 About

- Brand introduction
- Feature cards
- Supporting visuals

### 🏆 Programs

Includes multiple training programs such as:

- Strength Training
- Personal Training
- Boxing
- Yoga
- Weight Loss Coaching

### ⭐ Why Choose Us

Highlights the gym's strengths, benefits, and unique selling points.

### 👨‍🏫 Team

Displays coaches and trainers using reusable data-driven components.

### 💳 Membership

Responsive pricing cards with a featured membership plan.

### ❓ FAQ

Accordion interface for answering common questions.

### 💬 Testimonials

Member reviews that provide social proof.

### 📞 Contact

Displays contact information and a front-end contact form.

### 📌 Footer

Quick navigation links, social icons, and copyright.

---

## 🎯 Learning Goals

This project was built to practice:

- Component-based architecture
- TypeScript with React
- Responsive web design
- Tailwind CSS
- Scroll-based navigation
- Reusable UI components
- Motion animations
- Clean project organization
- Data-driven rendering
- Modern landing page design
- Deployment with Vercel

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Ubaid-Stack/IronPeak.git
```

### Navigate into the project

```bash
cd iron-peak
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 📝 Notes

- The contact form currently serves as a front-end UI and is not connected to a backend service.
- Social media links are placeholders and can be replaced with real profiles.
- Asset filenames should remain unchanged unless corresponding imports are updated.

---

## 📄 License

This project was created for learning and portfolio purposes.

Feel free to fork the project, explore the code, and use it as inspiration for your own learning.

---

## 👨‍💻 Author

**Ubaidullah Fareed**

If you enjoyed this project, consider giving it a ⭐ on GitHub!
