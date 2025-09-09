# Vue 3 Design System

A responsive, accessible design system built with Vue 3, Tailwind CSS, and TypeScript. This component library provides a comprehensive set of reusable UI components for building modern web applications.

## ✨ Features

- 🎨 **Design Tokens** - Consistent theming with CSS custom properties
- 📱 **Responsive** - Mobile-first design with Tailwind CSS
- ♿ **Accessible** - Built with Headless UI for proper accessibility
- 🎭 **Storybook** - Interactive component documentation
- 📦 **Tree-shakable** - Only import what you need
- 🔧 **TypeScript** - Full type safety
- 🚀 **Fast Development** - Vite for lightning-fast HMR

## 🛠️ Tech Stack

- **Vue 3** - Composition API with `<script setup>`
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Storybook** - Component development environment
- **TypeScript** - Static type checking

## 📦 Installation

```bash
npm install @myorg/design-system
```

## 🚀 Quick Start

### 1. Install the plugin globally

```javascript
import { createApp } from 'vue'
import DesignSystem from '@myorg/design-system'
import '@myorg/design-system/style.css'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

### 2. Or import individual components

```vue
<script setup>
import { UiButton, UiCard } from '@myorg/design-system'
</script>

<template>
  <UiCard>
    <template #header>
      <h2>Welcome</h2>
    </template>
    <p>This is a card component</p>
    <template #footer>
      <UiButton variant="primary">Action</UiButton>
    </template>
  </UiCard>
</template>
```

## 🎨 Components

### Button
Versatile button component with multiple variants and sizes.

```vue
<UiButton variant="primary" size="lg" @click="handleClick">
  Click me
</UiButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: boolean
- `rounded`: boolean
- `block`: boolean

### Card
Flexible container for displaying content.

```vue
<UiCard variant="elevated" hoverable>
  <template #header>Card Title</template>
  <p>Card content goes here</p>
  <template #footer>Card footer</template>
</UiCard>
```

**Props:**
- `variant`: 'default' | 'outlined' | 'elevated' | 'filled'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `rounded`: boolean
- `hoverable`: boolean

### Input
Form input with validation and various states.

```vue
<UiInput
  v-model="value"
  label="Email"
  type="email"
  placeholder="Enter your email"
  :error="emailError"
  required
/>
```

**Props:**
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
- `label`: string
- `placeholder`: string
- `hint`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `readonly`: boolean
- `required`: boolean

### Modal
Accessible modal dialog with Headless UI.

```vue
<UiModal :is-open="showModal" @close="showModal = false">
  <template #header>Modal Title</template>
  <p>Modal content</p>
  <template #footer>
    <UiButton @click="showModal = false">Close</UiButton>
  </template>
</UiModal>
```

**Props:**
- `isOpen`: boolean
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `showCloseButton`: boolean
- `closeOnOverlayClick`: boolean

## 🎨 Theming

The design system uses CSS custom properties for theming. Override these variables to customize the appearance:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-surface: #ffffff;
  --border-radius-base: 0.25rem;
  /* ... */
}
```

### Design Tokens

Access design tokens programmatically:

```javascript
import { tokens } from '@myorg/design-system'

console.log(tokens.colors.primary[500]) // #3b82f6
console.log(tokens.spacing.md) // 1rem
```

## 📱 Responsive Design

All components are built with mobile-first responsive design principles using Tailwind CSS breakpoints:

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 📖 Storybook

Start the Storybook development server to explore components:

```bash
npm run storybook
```

Build static Storybook for deployment:

```bash
npm run build-storybook
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build library
npm run build:lib

# Start Storybook
npm run storybook

# Lint code
npm run lint

# Format code
npm run format
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions and support, please open an issue on GitHub.
