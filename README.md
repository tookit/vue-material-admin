# Vue Material Admin

[![CircleCI](https://circleci.com/gh/tookit/vue-material-admin/tree/dev.svg?style=svg)](https://circleci.com/gh/tookit/vue-material-admin/tree/dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-brightgreen.svg)](https://vuejs.org/)
[![Vuetify 3](https://img.shields.io/badge/Vuetify-3.11-blue.svg)](https://vuetifyjs.com/)

English | [简体中文](./README.zh-CN.md)

## Introduction

Vue Material Admin is a modern, production-ready admin template built with [Vue 3](https://vuejs.org/) and [Vuetify 3](https://vuetifyjs.com/). It features a clean Material Design interface, TypeScript support, and a comprehensive set of components for building enterprise applications.

### Key Features

- ⚡️ **Vue 3** with Composition API & `<script setup>`
- 🎨 **Vuetify 3.11** - Latest Material Design components
- 📦 **TypeScript** - Type-safe development
- 🔥 **Vite 6** - Lightning fast HMR
- 🗂 **Pinia** - Intuitive state management
- 🌍 **Vue I18n** - Internationalization support
- 📊 **ApexCharts** - Beautiful data visualizations
- 📅 **FullCalendar** - Advanced calendar component
- 🎯 **Vue Router 4** - Official routing solution

## Discord Channel

[Join our Discord](https://discord.gg/7f6TVx)

## Demo

- [Vuetify 2 version](https://v2.isocked.com/#/auth/login)
- [Vuetify 3 version](https://vma.isocked.com/#/auth/login)

## Preview

![Preview](https://vma.isocked.com/vma_preview.webp)

## Documentation

- 🚀 [Quick Start Guide](./QUICKSTART.md) - Get started in minutes!d
- 📖 [Official Documentation](http://doc.isocked.com/)
- 📝 [Changelog](./CHANGELOG.md)

## Project Structure

```bash
├── src/
│   ├── api/              # API service layer
│   ├── components/       # Reusable Vue components
│   ├── composables/      # Vue composables (DRY utilities)
│   ├── layouts/          # Layout components
│   ├── plugins/          # Plugin configurations
│   │   ├── vuetify/      # Vuetify setup & theme
│   │   ├── i18n/         # Internationalization
│   │   └── msw/          # Mock Service Worker
│   ├── router/           # Vue Router configuration
│   ├── store/            # Pinia state management
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── views/            # Page components
│   ├── scss/             # Global styles
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── public/               # Static assets
├── dist/                 # Production build output
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and Yarn (or npm)

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server with hot-reload
yarn dev
```

The application will be available at `http://localhost:9527`

### Production Build

```bash
# Type-check and build for production
yarn build

# Preview production build locally
yarn preview
```

### Code Quality

```bash
# Run TypeScript type checking
yarn typecheck

# Lint and fix files
yarn lint
```

## Configuration

### Vite Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/)

### Vuetify Customization

Theme and component defaults can be customized in:
- `src/plugins/vuetify/theme.ts` - Color schemes and design tokens
- `src/plugins/vuetify/defaults.ts` - Component default props


## Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- **UI Library**: [Vuetify 3](https://vuetifyjs.com/) - Material Design component framework
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **State Management**: [Pinia](https://pinia.vuejs.org/) - Intuitive store for Vue
- **Routing**: [Vue Router 4](https://router.vuejs.org/) - Official router for Vue.js
- **Language**: [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- **Icons**: [Material Design Icons](https://materialdesignicons.com/)
- **Charts**: [ApexCharts](https://apexcharts.com/) - Modern charting library
- **Calendar**: [FullCalendar](https://fullcalendar.io/) - Full-sized calendar component
- **Styling**: [SASS](https://sass-lang.com/) - CSS preprocessor

## Browser Support

Modern browsers and Internet Explorer 11+ (with polyfills)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --------- | --------- | --------- | --------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tookit/vue-material-admin&type=Date)](https://star-history.com/#tookit/vue-material-admin&Date)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this project useful, you can support the author:

- [PayPal](https://www.paypal.me/tookit)
- [Buy Me a Coffee](https://www.buymeacoffee.com/tookit)

<a href="https://www.buymeacoffee.com/tookit" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" >
</a>

## License

[MIT](https://github.com/tookit/vue-material-admin/blob/master/LICENSE)

Copyright (c) 2025 Tookit
