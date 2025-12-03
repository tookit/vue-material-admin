# Quick Start Guide

Get up and running with Vue Material Admin in minutes!

## Prerequisites

- **Node.js**: 18.x or higher
- **Package Manager**: Yarn (recommended) or npm
- **IDE**: VS Code with Volar extension (recommended)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tookit/vue-material-admin.git
cd vue-material-admin
```

### 2. Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 3. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:9527`

## Project Structure

```
vue-material-admin/
├── src/
│   ├── api/              # API services
│   ├── components/       # Reusable components
│   ├── composables/      # Vue composables (NEW!)
│   ├── layouts/          # Layout components
│   ├── plugins/          # Plugin configurations
│   ├── router/           # Vue Router
│   ├── store/            # Pinia stores
│   ├── views/            # Page components
│   └── main.ts           # Entry point
├── public/               # Static assets
└── docs/                 # Documentation
```

## Key Features

### 🎨 Vuetify 3.11

Latest Material Design components with full TypeScript support.

```vue
<template>
  <VBtn color="primary">Click Me</VBtn>
  <VCard>
    <VCardTitle>Card Title</VCardTitle>
    <VCardText>Card content</VCardText>
  </VCard>
</template>
```

### 🔧 Composables

Reusable logic with Vue Composition API.

```typescript
import { useApi, useFormValidation } from '@/composables';

// API calls with loading states
const { data, loading, execute } = useGet('/api/users');

// Form validation
const { rules } = useFormValidation();
```

### 🎯 TypeScript

Full type safety throughout the project.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);
```

### 🌍 Internationalization

Multi-language support with Vue I18n.

```typescript
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const greeting = t('hello');
```

## Common Tasks

### Creating a New Page

1. Create component in `src/views/`:

```vue
<!-- src/views/MyPage.vue -->
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello World');
</script>

<template>
  <VContainer>
    <h1>{{ message }}</h1>
  </VContainer>
</template>
```

2. Add route in `src/router/`:

```typescript
{
  path: '/my-page',
  name: 'MyPage',
  component: () => import('@/views/MyPage.vue')
}
```

### Making API Calls

```typescript
import { useGet, usePost } from '@/composables';

// GET request
const { data: users, loading } = useGet('/api/users', {
  immediate: true
});

// POST request
const { execute: createUser } = usePost('/api/users');

const handleSubmit = async (userData) => {
  await createUser({ data: userData });
};
```

### Form Validation

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useFormValidation } from '@/composables';

const { rules } = useFormValidation();
const email = ref('');
const password = ref('');
</script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      label="Email"
      :rules="[rules.required(), rules.email()]"
    />
    <VTextField
      v-model="password"
      label="Password"
      type="password"
      :rules="[rules.required(), rules.minLength(8)]"
    />
  </VForm>
</template>
```

### State Management with Pinia

```typescript
// stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isAuthenticated = true;
    }
  }
});

// In component
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
userStore.setUser({ name: 'John' });
```

### Customizing Theme

Edit `src/plugins/vuetify/constants.ts`:

```typescript
export const PRIMARY_COLOR = '#304FFD'; // Change this!

export const LIGHT_THEME_COLORS = {
  primary: PRIMARY_COLOR,
  secondary: '#FF965D', // Or this!
  // ...
};
```

## Available Scripts

```bash
# Development server with hot-reload
yarn dev

# Type-check and build for production
yarn build

# Preview production build
yarn preview

# Run TypeScript type checking
yarn typecheck

# Lint and fix files
yarn lint
```

## IDE Setup

### VS Code (Recommended)

Install these extensions:

1. **Volar** - Vue 3 language support
2. **TypeScript Vue Plugin** - TypeScript support for Vue
3. **ESLint** - Code linting
4. **Prettier** - Code formatting

### Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Troubleshooting

### Port Already in Use

Change port in `vite.config.ts`:

```typescript
server: {
  port: 3000 // Change from 9527
}
```

### Module Not Found

Clear cache and reinstall:

```bash
rm -rf node_modules yarn.lock
yarn install
```

### TypeScript Errors

Run type checking:

```bash
yarn typecheck
```

### Build Errors

Clear dist and rebuild:

```bash
rm -rf dist
yarn build
```

## Learning Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Next Steps

1. ✅ Explore the demo pages
2. ✅ Read the [Composables Reference](./docs/COMPOSABLES.md)
3. ✅ Check out the [Migration Guide](./MIGRATION.md)
4. ✅ Customize the theme colors
5. ✅ Build your first page!

## Getting Help

- 📖 [Documentation](./docs/)
- 💬 [Discord Channel](https://discord.gg/7f6TVx)
- 🐛 [GitHub Issues](https://github.com/tookit/vue-material-admin/issues)
- 📧 Contact the maintainers

---

**Happy coding! 🚀**
