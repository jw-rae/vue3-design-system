# 🎨 Multi-Theme Implementation Guide

## 🌟 **Overview**

Our design system now supports **4 beautiful theme variations**:

- 🔵 **Default Blue** - Versatile and modern
- 🌸 **Elegant Pink** - Soft baby pinks to rich berry
- 🌿 **Nature Green** - Soothing muted nature tones
- 🌌 **Corporate Blue** - Night sky to light corporate blues

Each theme supports both **light and dark modes** with carefully crafted color palettes.

## 🛠️ **Implementation**

### **1. Basic Theme Usage**

```vue
<template>
  <div>
    <!-- Theme Toggle Component -->
    <ThemeToggle />
    
    <!-- Components automatically adapt to current theme -->
    <Button variant="primary">Primary Action</Button>
    <Badge variant="success">Success</Badge>
    <Card>Content adapts to theme</Card>
  </div>
</template>

<script setup>
import { ThemeToggle } from '@your-org/design-system'
</script>
```

### **2. Programmatic Theme Control**

```vue
<script setup>
import { useTheme } from '@your-org/design-system'

const { currentTheme, isDark, setColorTheme, toggleTheme } = useTheme()

// Switch themes
const switchToPink = () => setColorTheme('pink')
const switchToGreen = () => setColorTheme('green')
const switchToBlue = () => setColorTheme('blue')
const switchToDefault = () => setColorTheme('default')

// Toggle dark/light mode
const toggleMode = () => toggleTheme()
</script>
```

### **3. Theme Detection**

```vue
<script setup>
import { useTheme } from '@your-org/design-system'

const { themeInfo } = useTheme()

// Access current theme info
console.log(themeInfo.value.colorTheme) // 'pink', 'green', 'blue', 'default'
console.log(themeInfo.value.isDark) // true/false
console.log(themeInfo.value.displayName) // 'Elegant Pink', etc.
</script>
```

## 🎨 **Theme Characteristics**

### **🌸 Pink Theme - "Elegant"**
- **Light Mode**: Soft baby pinks, warm creams, gentle roses
- **Dark Mode**: Rich berry tones, deep wine colors
- **Best For**: Beauty, wellness, creative, lifestyle brands
- **Personality**: Elegant, soft, sophisticated, feminine

### **🌿 Green Theme - "Nature"**
- **Light Mode**: Soft mints, sage greens, natural tones
- **Dark Mode**: Deep forest, rich emerald colors
- **Best For**: Health, sustainability, outdoor, eco-friendly brands
- **Personality**: Calming, natural, trustworthy, growth-oriented

### **🌌 Blue Theme - "Corporate"**
- **Light Mode**: Light sky, soft blues, clean tones
- **Dark Mode**: Night sky, deep navy, professional colors
- **Best For**: Corporate, finance, technology, professional services
- **Personality**: Trustworthy, professional, stable, authoritative

### **🔵 Default Theme - "Versatile"**
- **Light Mode**: Modern blues, clean grays, bright accents
- **Dark Mode**: Deep blues, sophisticated darks
- **Best For**: SaaS, general apps, versatile applications
- **Personality**: Modern, versatile, friendly, approachable

## ⚙️ **Technical Details**

### **CSS Custom Properties**
Themes are applied using CSS custom properties:

```css
:root[data-theme="pink"] {
  --color-primary-500: #ec4899;
  --color-background-primary: #ffffff;
  --color-text-primary: #500724;
  /* ... */
}
```

### **Automatic Application**
The `useTheme` composable automatically:
- Applies `data-theme` attribute to `<html>`
- Manages `dark` class for dark mode
- Persists preferences in localStorage
- Injects theme CSS custom properties

### **Component Integration**
All components use semantic color tokens that automatically adapt:

```vue
<!-- This button changes color based on active theme -->
<Button variant="primary">Adapts to any theme</Button>
```

## 🎯 **Best Practices**

### **1. Theme Selection**
- **Pink**: Beauty, wellness, creative industries
- **Green**: Health, nature, sustainability focus
- **Blue**: Corporate, professional, technology
- **Default**: General purpose, SaaS applications

### **2. Brand Consistency**
- Choose one theme per application
- Allow users to toggle light/dark mode
- Consider brand personality when selecting

### **3. Accessibility**
- All themes maintain WCAG contrast ratios
- Dark modes are carefully optimized
- Focus states remain visible across themes

### **4. Performance**
- Themes switch instantly via CSS custom properties
- No JavaScript re-rendering required
- Preferences persist across sessions

## 🚀 **Getting Started**

1. **Install the updated design system**
2. **Add ThemeToggle component** to your app header
3. **Initialize theme** in your main App component:

```vue
<!-- App.vue -->
<script setup>
import { useTheme } from '@your-org/design-system'

const { initializeTheme } = useTheme()

// Initialize on app mount
onMounted(() => {
  initializeTheme()
})
</script>
```

4. **Choose your default theme** and let users customize!

## 🎨 **Design Philosophy**

Our multi-theme system provides:
- **Brand Flexibility** - Choose colors that match your brand
- **User Preference** - Light/dark mode support
- **Consistent Structure** - Same components, different personalities
- **Accessibility First** - Proper contrast in all variations
- **Developer Experience** - Simple implementation, automatic adaptation

**The same design system, infinite possibilities!** ✨
