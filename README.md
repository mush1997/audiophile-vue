# 🎧 Audiophile e-commerce website

A modern e-commerce website selling headphones, earphones, and speakers.  
This application was primarily built with **Vue 3 (Composition API)**, **Vue Router**, and **Pinia**.

## 🔗 Live Demo

Live Site URL: [https://audiophile-website-vue.vercel.app/](https://audiophile-website-vue.vercel.app/)

## 📝 Description

This is a complete front-end solution to the [Audiophile e-commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx) challenge on _Frontend Mentor_, showcasing a fully functional shopping experience.

## ✨ Features

- Product browsing and detail display
- Add/Update/Remove operations for the shopping cart with real-time price calculations
- Checkout process with form validation
- Customized confirmation dialog box and modal
- Responsive UI for mobile, tablet, and desktop devices (RWD)
- Dynamic routing with Vue Router
- State management with Pinia

## 📁 Structure

```
src/
├── assets/        # Static assets (images)
├── components/    # Vue components
├── composables/   # Reusable logic
├── router/        # Vue Router configuration
├── stores/        # Pinia state management
├── styles/        # Shared CSS/SCSS settings and variables
├── views/         # Page-level components
├── App.vue        # Root component
└── main.js        # Entry point
```

## 💡 Technical Highlights: Refactoring from Vanilla JS to Vue 3

This project was originally developed using Vanilla JavaScript [(JS version GitHub Repository)](https://github.com/mush1997/audiophile-js) and was later fully refactored into a **Vue 3 Single Page Application** (SPA) to address challenges related to state synchronization and code scalability.

Transitioning to Vue 3 provided several critical advantages:

- **Component-Based Development:** Deconstructed lengthy HTML files into modular Vue components, significantly reducing code redundancy and enhancing maintainability.
- **Scalable State Management:** Implemented **Pinia** to manage **six distinct stores**, including the shopping cart and product data. This resolved data synchronization pain points encountered in the Vanilla JS version, ensuring data consistency across all pages and views.
- **Performance & Reactivity:** Leveraged Vue’s built-in reactivity system to automate UI updates. By eliminating extensive manual DOM manipulation, the application achieved improved performance.

## 🛠️ Technologies

- **Vue** v3.5.18
- **Vue Router** v4.5.1
- **Pinia** v3.0.3
- **Vite** v7.0.6
- **VueUse** v13.9.0
- **axios** v1.12.2
- **SASS/SCSS** v1.92.1
