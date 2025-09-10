// Multi-theme system with beautiful color variations
export type ThemeName = 'default' | 'pink' | 'green' | 'blue'

export interface ThemeColors {
    // Primary brand colors
    primary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
        950: string
    }
    // Semantic surface colors (theme-aware)
    background: {
        primary: string
        secondary: string
        tertiary: string
        inverse: string
    }
    surface: {
        primary: string
        secondary: string
        elevated: string
        overlay: string
    }
    text: {
        primary: string
        secondary: string
        tertiary: string
        inverse: string
        disabled: string
    }
    border: {
        primary: string
        secondary: string
        focus: string
        error: string
    }
}

// 🌸 **Pink Theme**: Elegant soft pinks to dark berry
export const pinkTheme: ThemeColors = {
    primary: {
        50: '#fdf2f8',   // Softest baby pink
        100: '#fce7f3',  // Light blush
        200: '#fbcfe8',  // Gentle pink
        300: '#f9a8d4',  // Soft rose
        400: '#f472b6',  // Medium pink
        500: '#ec4899',  // Main elegant pink
        600: '#db2777',  // Deep rose
        700: '#be185d',  // Rich berry
        800: '#9d174d',  // Dark berry
        900: '#831843',  // Deep berry
        950: '#500724',  // Darkest berry
    },
    background: {
        primary: '#ffffff',
        secondary: '#fef7f0',  // Warm cream
        tertiary: '#fdf2f8',   // Softest pink tint
        inverse: '#500724',    // Deep berry
    },
    surface: {
        primary: '#ffffff',
        secondary: '#fef7f0',
        elevated: '#ffffff',
        overlay: 'rgba(80, 7, 36, 0.5)', // Berry overlay
    },
    text: {
        primary: '#500724',    // Deep berry
        secondary: '#831843',  // Medium berry
        tertiary: '#9d174d',   // Lighter berry
        inverse: '#fdf2f8',    // Soft pink
        disabled: '#f9a8d4',   // Muted pink
    },
    border: {
        primary: '#fbcfe8',    // Gentle pink
        secondary: '#f9a8d4',  // Soft rose
        focus: '#ec4899',      // Main pink
        error: '#dc2626',      // Keep error red
    },
}

// 🌿 **Green Theme**: Soothing muted nature greens
export const greenTheme: ThemeColors = {
    primary: {
        50: '#f0fdf4',   // Softest mint
        100: '#dcfce7',  // Light sage
        200: '#bbf7d0',  // Gentle mint
        300: '#86efac',  // Soft green
        400: '#4ade80',  // Fresh green
        500: '#22c55e',  // Main nature green
        600: '#16a34a',  // Deep forest
        700: '#15803d',  // Rich forest
        800: '#166534',  // Dark forest
        900: '#14532d',  // Deep forest
        950: '#052e16',  // Darkest forest
    },
    background: {
        primary: '#ffffff',
        secondary: '#f7fdf7',  // Subtle sage tint
        tertiary: '#f0fdf4',   // Softest mint
        inverse: '#052e16',    // Deep forest
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f7fdf7',
        elevated: '#ffffff',
        overlay: 'rgba(5, 46, 22, 0.5)', // Forest overlay
    },
    text: {
        primary: '#052e16',    // Deep forest
        secondary: '#14532d',  // Medium forest
        tertiary: '#166534',   // Lighter forest
        inverse: '#f0fdf4',    // Soft mint
        disabled: '#86efac',   // Muted green
    },
    border: {
        primary: '#bbf7d0',    // Gentle mint
        secondary: '#86efac',  // Soft green
        focus: '#22c55e',      // Main green
        error: '#dc2626',      // Keep error red
    },
}

// 🌌 **Blue Theme**: Night sky to light corporate blues
export const blueTheme: ThemeColors = {
    primary: {
        50: '#f0f9ff',   // Softest sky
        100: '#e0f2fe',  // Light sky
        200: '#bae6fd',  // Gentle blue
        300: '#7dd3fc',  // Soft blue
        400: '#38bdf8',  // Fresh blue
        500: '#0ea5e9',  // Main corporate blue
        600: '#0284c7',  // Deep ocean
        700: '#0369a1',  // Rich navy
        800: '#075985',  // Dark navy
        900: '#0c4a6e',  // Deep navy
        950: '#082f49',  // Night sky
    },
    background: {
        primary: '#ffffff',
        secondary: '#f8fafc',  // Cool gray tint
        tertiary: '#f0f9ff',   // Softest sky
        inverse: '#082f49',    // Night sky
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        elevated: '#ffffff',
        overlay: 'rgba(8, 47, 73, 0.5)', // Navy overlay
    },
    text: {
        primary: '#082f49',    // Night sky
        secondary: '#0c4a6e',  // Medium navy
        tertiary: '#075985',   // Lighter navy
        inverse: '#f0f9ff',    // Soft sky
        disabled: '#7dd3fc',   // Muted blue
    },
    border: {
        primary: '#bae6fd',    // Gentle blue
        secondary: '#7dd3fc',  // Soft blue
        focus: '#0ea5e9',      // Main blue
        error: '#dc2626',      // Keep error red
    },
}

// 🔵 **Default Theme**: Current system (enhanced)
export const defaultTheme: ThemeColors = {
    primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',   // Main blue
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
    },
    background: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        tertiary: '#f1f5f9',
        inverse: '#0f172a',
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        elevated: '#ffffff',
        overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        primary: '#0f172a',
        secondary: '#475569',
        tertiary: '#64748b',
        inverse: '#f8fafc',
        disabled: '#94a3b8',
    },
    border: {
        primary: '#e2e8f0',
        secondary: '#cbd5e1',
        focus: '#3b82f6',
        error: '#ef4444',
    },
}

// Theme registry
export const themes: Record<ThemeName, ThemeColors> = {
    default: defaultTheme,
    pink: pinkTheme,
    green: greenTheme,
    blue: blueTheme,
}

// Get theme colors by name
export function getTheme(name: ThemeName): ThemeColors {
    return themes[name] || defaultTheme
}

// CSS custom properties generator for themes
export function generateThemeCSS(themeName: ThemeName): string {
    const theme = getTheme(themeName)

    const lightModeVars: string[] = []
    const darkModeVars: string[] = []

    // Primary colors (same for light and dark)
    Object.entries(theme.primary).forEach(([key, value]) => {
        lightModeVars.push(`--color-primary-${key}: ${value};`)
        darkModeVars.push(`--color-primary-${key}: ${value};`)
    })

    // Light mode colors
    lightModeVars.push(`--color-background-primary: ${theme.background.primary};`)
    lightModeVars.push(`--color-background-secondary: ${theme.background.secondary};`)
    lightModeVars.push(`--color-background-tertiary: ${theme.background.tertiary};`)
    lightModeVars.push(`--color-surface-primary: ${theme.surface.primary};`)
    lightModeVars.push(`--color-surface-secondary: ${theme.surface.secondary};`)
    lightModeVars.push(`--color-surface-elevated: ${theme.surface.elevated};`)
    lightModeVars.push(`--color-text-primary: ${theme.text.primary};`)
    lightModeVars.push(`--color-text-secondary: ${theme.text.secondary};`)
    lightModeVars.push(`--color-text-tertiary: ${theme.text.tertiary};`)
    lightModeVars.push(`--color-border-primary: ${theme.border.primary};`)
    lightModeVars.push(`--color-border-secondary: ${theme.border.secondary};`)

    // Dark mode colors (using inverted primary colors)
    darkModeVars.push(`--color-background-primary: ${theme.primary[950]};`)
    darkModeVars.push(`--color-background-secondary: ${theme.primary[900]};`)
    darkModeVars.push(`--color-background-tertiary: ${theme.primary[800]};`)
    darkModeVars.push(`--color-surface-primary: ${theme.primary[950]};`)
    darkModeVars.push(`--color-surface-secondary: ${theme.primary[900]};`)
    darkModeVars.push(`--color-surface-elevated: ${theme.primary[800]};`)
    darkModeVars.push(`--color-text-primary: ${theme.primary[50]};`)
    darkModeVars.push(`--color-text-secondary: ${theme.primary[200]};`)
    darkModeVars.push(`--color-text-tertiary: ${theme.primary[300]};`)
    darkModeVars.push(`--color-border-primary: ${theme.primary[700]};`)
    darkModeVars.push(`--color-border-secondary: ${theme.primary[600]};`)

    // Static colors for both modes
    const staticVars = [
        `--color-background-inverse: ${theme.background.inverse};`,
        `--color-surface-overlay: ${theme.surface.overlay};`,
        `--color-text-inverse: ${theme.text.inverse};`,
        `--color-text-disabled: ${theme.text.disabled};`,
        `--color-border-focus: ${theme.border.focus};`,
        `--color-border-error: ${theme.border.error};`,
    ]

    return `
:root[data-theme="${themeName}"] {
  ${lightModeVars.concat(staticVars).join('\n  ')}
}

:root[data-theme="${themeName}"].dark {
  ${darkModeVars.concat(staticVars).join('\n  ')}
}`.trim()
}
