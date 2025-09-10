# 📝 Font Customization Guide

## 🎯 **Design Philosophy**

The design system provides **typography scales** and **system fonts** by default, but allows apps to **override fonts** for brand customization.

## 🛠️ **How to Customize Fonts**

### **Option 1: Override in Tailwind Config**

```javascript
// your-app/tailwind.config.js
import { tokens } from '@your-org/design-system'

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      ...tokens,
      fontFamily: {
        // Override design system fonts
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        // Add custom brand fonts
        brand: ['YourBrandFont', 'serif'],
      }
    }
  }
}
```

### **Option 2: CSS Custom Properties**

```css
/* your-app/src/styles/fonts.css */
:root {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-brand: 'YourBrandFont', serif;
}

/* Override design system fonts */
.font-sans { font-family: var(--font-sans); }
.font-mono { font-family: var(--font-mono); }
.font-brand { font-family: var(--font-brand); }
```

### **Option 3: Google Fonts Integration**

```html
<!-- your-app/index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```javascript
// your-app/tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

## 🎨 **Typography Tokens**

The design system provides these **consistent scales**:

```typescript
fontSize: {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
}

fontWeight: {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

## ✅ **Best Practices**

1. **Consistent Scales**: Use design system font sizes/weights
2. **Performance**: Limit to 3-4 font weights maximum
3. **Fallbacks**: Always include system font fallbacks
4. **Loading**: Use `font-display: swap` for web fonts
5. **Brand Flexibility**: Override fonts per app, keep scales consistent

## 📱 **Example Usage**

```vue
<template>
  <!-- Uses design system scale, app-specific font -->
  <h1 class="text-3xl font-bold font-brand">
    Brand Heading
  </h1>
  
  <!-- Consistent scale across all apps -->
  <p class="text-base font-normal font-sans">
    Body text with app font
  </p>
</template>
```

This approach gives you **design consistency** with **brand flexibility**! 🎉
