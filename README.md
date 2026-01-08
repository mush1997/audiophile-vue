# 🎧 Audiophile e-commerce website

A modern e-commerce website selling headphones, earphones and speakers.  
This application was primarily built using **Vue 3 (Composition API)**, **Vue Router** and **Pinia**.

## 🔗 Live Demo

Live Site URL: [https://audiophile-website-vue.vercel.app/](https://audiophile-website-vue.vercel.app/)

## 📝 Description

This is a complete front-end solution to the [Audiophile e-commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx) challenge on _Frontend Mentor_, showcasing a fully functional shopping experience.

## ✨ Features

- Product browsing and detail display
- Add/Update/Remove operations with the shopping cart
- Checkout process with form validation
- Customized confirmation dialog box & modal
- Responsive UI for mobile, tablet and desktop (RWD)
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
├── styles/        # shared CSS/SCSS settings and variables
├── views/         # Page-level components
├── App.vue        # Root component
├── main.js        # Entry point
```

## 💡 Technical Highlights: From Vanilla JS to Vue 3 Refactor

This project was originally developed using **Vanilla JavaScript** [JS version GitHub](https://github.com/mush1997/audiophile-js), and it was completely refactored into a **Vue 3 Single Page Application (SPA)** to address challenges in state synchronization and code scalability.

Transitioning to Vue 3 provided several critical advantages:

- **Component-Based Development:** Deconstructed lengthy HTML files into modular Vue components. This significantly reduced code redundancy and improved maintainability, allowing for a more organized and scalable codebase.
- **Scalable State Management:** Implemented **Pinia** to manage **6 distinct stores** (including the shopping cart and product data). This resolved the data synchronization pain points found in the Vanilla JS version, ensuring data consistency across all pages and views.
- **Performance & Reactivity:** Using Vue’s built-in reactivity system to automate UI updates. By eliminating extensive manual DOM manipulation, the application became more performant.

## 🛠️ Technologies

- **Vue** v3.5.18
- **Vue Router** v4.5.1
- **Pinia** v3.0.3
- **Vite** v7.0.6
- **VueUse** v13.9.0
- **axios** v1.12.2
- **SASS/SCSS** v1.92.1
