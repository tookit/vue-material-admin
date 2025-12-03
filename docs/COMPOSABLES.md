# Composables Reference

This document provides a comprehensive guide to the custom composables available in this project.

## Table of Contents

- [useDrawer](#usedrawer)
- [useApi](#useapi)
- [useFormValidation](#useformvalidation)

---

## useDrawer

Manages drawer/sidebar state with toggle functionality.

### Usage

```typescript
import { useDrawer } from '@/composables';

const { state, toggle, isExpanded } = useDrawer(initialWidth?, collapsedWidth?);
```

### Parameters

- `initialWidth` (optional): Initial width when expanded (default: 256)
- `collapsedWidth` (optional): Width when collapsed (default: 64)

### Returns

- `state`: Reactive state object
  - `rail`: Boolean indicating if drawer is in rail mode
  - `railWidth`: Current width of the drawer
  - `icon`: Icon name for toggle button
- `toggle()`: Function to toggle drawer state
- `isExpanded`: Computed boolean indicating if drawer is expanded

### Example

```vue
<script setup lang="ts">
import { useDrawer } from '@/composables';

const { state, toggle, isExpanded } = useDrawer();
</script>

<template>
  <VNavigationDrawer 
    :rail-width="state.railWidth" 
    :rail="state.rail"
  >
    <VBtn :icon="state.icon" @click="toggle" />
  </VNavigationDrawer>
</template>
```

---

## useApi

Generic API call handler with loading and error states.

### Usage

```typescript
import { useApi, useGet, usePost, usePut, useDelete } from '@/composables';

// Generic
const { data, loading, error, execute } = useApi(url, config?, options?);

// HTTP method shortcuts
const { data, loading, error, execute } = useGet(url, options?);
const { data, loading, error, execute } = usePost(url, options?);
const { data, loading, error, execute } = usePut(url, options?);
const { data, loading, error, execute } = useDelete(url, options?);
```

### Parameters

- `url`: String or function returning URL
- `config` (optional): Axios request configuration
- `options` (optional):
  - `immediate`: Execute request immediately (default: false)
  - `onSuccess`: Callback on successful request
  - `onError`: Callback on error

### Returns

- `data`: Ref containing response data
- `loading`: Ref boolean indicating loading state
- `error`: Ref containing error if request failed
- `execute()`: Function to execute the request

### Examples

#### GET Request with Immediate Execution

```typescript
const { data, loading, error } = useGet('/api/users', {
  immediate: true,
  onSuccess: (data) => {
    console.log('Users loaded:', data);
  }
});
```

#### POST Request

```typescript
const { execute: createUser, loading } = usePost('/api/users');

const handleSubmit = async () => {
  try {
    await createUser({
      data: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    });
  } catch (error) {
    console.error('Failed to create user');
  }
};
```

#### Dynamic URL

```typescript
const userId = ref(1);
const { data, execute } = useGet(() => `/api/users/${userId.value}`);

// Fetch different user
userId.value = 2;
await execute();
```

---

## useFormValidation

Provides common form validation rules.

### Usage

```typescript
import { useFormValidation } from '@/composables';

const { isValid, rules } = useFormValidation();
```

### Returns

- `isValid`: Ref boolean for form validity
- `rules`: Object containing validation rule factories

### Available Rules

#### required(message?)

Validates that field has a value.

```typescript
:rules="[rules.required()]"
:rules="[rules.required('Name is required')]"
```

#### email(message?)

Validates email format.

```typescript
:rules="[rules.email()]"
:rules="[rules.email('Please enter a valid email')]"
```

#### minLength(min, message?)

Validates minimum string length.

```typescript
:rules="[rules.minLength(8)]"
:rules="[rules.minLength(8, 'Password must be at least 8 characters')]"
```

#### maxLength(max, message?)

Validates maximum string length.

```typescript
:rules="[rules.maxLength(100)]"
:rules="[rules.maxLength(100, 'Maximum 100 characters allowed')]"
```

#### numeric(message?)

Validates that value is numeric.

```typescript
:rules="[rules.numeric()]"
:rules="[rules.numeric('Please enter a number')]"
```

#### url(message?)

Validates URL format.

```typescript
:rules="[rules.url()]"
:rules="[rules.url('Please enter a valid URL')]"
```

#### match(compareValue, message?)

Validates that value matches another value.

```typescript
const password = ref('');
const confirmPassword = ref('');

:rules="[rules.match(password.value, 'Passwords must match')]"
```

### Complete Form Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useFormValidation } from '@/composables';

const { rules } = useFormValidation();
const form = ref();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleSubmit = async () => {
  const { valid } = await form.value.validate();
  if (valid) {
    // Submit form
  }
};
</script>

<template>
  <VForm ref="form" @submit.prevent="handleSubmit">
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
    
    <VTextField
      v-model="confirmPassword"
      label="Confirm Password"
      type="password"
      :rules="[
        rules.required(),
        rules.match(password, 'Passwords must match')
      ]"
    />
    
    <VBtn type="submit">Submit</VBtn>
  </VForm>
</template>
```

---

## Creating Custom Composables

Follow these patterns when creating new composables:

### 1. File Naming

Use `use` prefix: `useFeatureName.ts`

### 2. Export Pattern

```typescript
export function useFeatureName() {
  // Reactive state
  const state = ref();
  
  // Computed properties
  const computed = computed(() => state.value);
  
  // Methods
  const method = () => {
    // logic
  };
  
  // Return public API
  return {
    state,
    computed,
    method
  };
}
```

### 3. TypeScript Types

```typescript
export interface FeatureOptions {
  option1?: string;
  option2?: number;
}

export function useFeatureName(options: FeatureOptions = {}) {
  // implementation
}
```

### 4. Add to Index

Update `src/composables/index.ts`:

```typescript
export * from './useFeatureName';
```

---

## Best Practices

1. **Keep composables focused**: Each composable should have a single responsibility
2. **Use TypeScript**: Define interfaces for options and return types
3. **Document parameters**: Add JSDoc comments for better IDE support
4. **Test composables**: Write unit tests for complex logic
5. **Avoid side effects**: Keep composables pure when possible
6. **Export from index**: Always export from `src/composables/index.ts`
