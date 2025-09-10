// Multi-theme system with sophisticated themes
export type ThemeName = 'warm' | 'cool' | 'pink' | 'green' | 'blue'

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
    // Semantic accent colors
    accent: {
        success: {
            light: string
            main: string
            dark: string
        }
        warning: {
            light: string
            main: string
            dark: string
        }
        error: {
            light: string
            main: string
            dark: string
        }
        info: {
            light: string
            main: string
            dark: string
        }
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

// 🔥 **System Warm**: Subtle sepia-grey tones inspired by VS Code Dark Modern
export const warmTheme: ThemeColors = {
    primary: {
        50: '#faf9f7',   // Very light sand/cream
        100: '#f5f3f0',  // Light warm sand
        200: '#ede8e0',  // Soft sand beige
        300: '#e0d6c7',  // Medium warm sand
        400: '#a8a29e',  // Muted warm grey (transition point)
        500: '#78716c',  // Main warm grey (sepia-toned)
        600: '#57534e',  // Deeper warm grey
        700: '#44403c',  // Rich warm charcoal
        800: '#292524',  // Dark warm grey
        900: '#1c1917',  // Deep warm charcoal
        950: '#0c0a09',  // Darkest warm black
    },
    accent: {
        success: {
            light: '#a8b5a0',  // Warm sage green with grey undertones
            main: '#7a8a70',   // Rich muted green that's clearly green
            dark: '#5a6650',   // Deep forest green with warm base
        },
        warning: {
            light: '#b8a690',  // Warm amber-grey that's clearly orange
            main: '#8c7860',   // Rich muted orange with sophistication
            dark: '#6b5a47',   // Deep burnt orange with warm grey
        },
        error: {
            light: '#b59590',  // Warm terracotta-grey that's clearly red
            main: '#8a6660',   // Rich muted red with sophistication
            dark: '#684d47',   // Deep burgundy with warm grey
        },
        info: {
            light: '#95a5b8',  // Cool slate-blue that's clearly blue
            main: '#65758c',   // Rich muted blue with sophistication
            dark: '#4a566b',   // Deep navy-grey with cool undertones
        }
    },
    background: {
        primary: '#ffffff',
        secondary: '#faf9f7',  // Very light sand/cream
        tertiary: '#f5f3f0',   // Light warm sand
        inverse: '#0c0a09',    // Darkest warm black
    },
    surface: {
        primary: '#ffffff',
        secondary: '#faf9f7',
        elevated: '#ffffff',
        overlay: 'rgba(12, 10, 9, 0.6)', // Dark warm overlay
    },
    text: {
        primary: '#0c0a09',    // Darkest warm black
        secondary: '#1c1917',  // Deep warm charcoal
        tertiary: '#292524',   // Dark warm grey
        inverse: '#faf9f7',    // Very light sand/cream
        disabled: '#e0d6c7',   // Medium warm sand
    },
    border: {
        primary: '#ede8e0',    // Soft sand beige
        secondary: '#e0d6c7',  // Medium warm sand
        focus: '#78716c',      // Main warm grey
        error: '#dc2626',      // Keep error red for clarity
    },
}

// ❄️ **System Cool**: Muted greys and coal tones - clean and sophisticated
export const coolTheme: ThemeColors = {
    primary: {
        50: '#f0f4f8',   // Very light blue-grey
        100: '#e2e8f0',  // Light blue-grey
        200: '#cbd5e1',  // Medium light blue-grey
        300: '#94a3b8',  // Medium blue-grey
        400: '#64748b',  // Transitional blue to grey
        500: '#525252',  // Pure medium grey
        600: '#404040',  // Dark grey
        700: '#262626',  // Rich charcoal
        800: '#171717',  // Dark charcoal
        900: '#0a0a0a',  // Deep coal
        950: '#000000',  // Pure black
    },
    accent: {
        success: {
            light: '#9db5a0',  // Cool sage green with grey undertones
            main: '#6d8570',   // Rich muted green that's clearly green
            dark: '#4f5f52',   // Deep forest green with cool base
        },
        warning: {
            light: '#b5a085',  // Cool amber-grey that's clearly orange
            main: '#8c7555',   // Rich muted orange with cool sophistication
            dark: '#5f4d3a',   // Deep burnt orange with cool grey
        },
        error: {
            light: '#b59090',  // Cool terracotta-grey that's clearly red
            main: '#8a5f5f',   // Rich muted red with cool sophistication
            dark: '#5c4040',   // Deep burgundy with cool grey
        },
        info: {
            light: '#90a5b8',  // Cool slate-blue that's clearly blue
            main: '#5f748c',   // Rich muted blue with cool sophistication
            dark: '#40526b',   // Deep navy-grey with cool undertones
        }
    },
    background: {
        primary: '#ffffff',
        secondary: '#f0f4f8',  // Very light blue-grey
        tertiary: '#e2e8f0',   // Light blue-grey
        inverse: '#0a0a0a',    // Deep grey
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f0f4f8',
        elevated: '#ffffff',
        overlay: 'rgba(10, 10, 10, 0.6)', // Pure grey overlay
    },
    text: {
        primary: '#0a0a0a',    // Deep grey
        secondary: '#262626',  // Dark charcoal
        tertiary: '#404040',   // Medium dark grey
        inverse: '#f0f4f8',    // Very light blue-grey
        disabled: '#cbd5e1',   // Light blue-grey
    },
    border: {
        primary: '#e2e8f0',    // Light blue-grey
        secondary: '#cbd5e1',  // Medium light blue-grey
        focus: '#525252',      // Medium grey
        error: '#dc2626',      // Clear red for errors
    },
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
    accent: {
        success: {
            light: '#86efac',  // Soft green
            main: '#22c55e',   // Nature green
            dark: '#15803d',   // Deep forest
        },
        warning: {
            light: '#fed7aa',  // Soft peach
            main: '#fb923c',   // Warm orange
            dark: '#ea580c',   // Deep orange
        },
        error: {
            light: '#fca5a5',  // Soft red
            main: '#ef4444',   // Clear red
            dark: '#dc2626',   // Deep red
        },
        info: {
            light: '#c4b5fd',  // Soft purple
            main: '#8b5cf6',   // Purple
            dark: '#7c3aed',   // Deep purple
        }
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
    accent: {
        success: {
            light: '#bbf7d0',  // Light mint (theme primary)
            main: '#22c55e',   // Nature green (theme primary)
            dark: '#15803d',   // Deep forest (theme primary)
        },
        warning: {
            light: '#fde047',  // Bright yellow
            main: '#eab308',   // Warning yellow
            dark: '#a16207',   // Deep amber
        },
        error: {
            light: '#fca5a5',  // Soft red
            main: '#ef4444',   // Clear red
            dark: '#dc2626',   // Deep red
        },
        info: {
            light: '#67e8f9',  // Soft cyan
            main: '#06b6d4',   // Cyan
            dark: '#0891b2',   // Deep cyan
        }
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
    accent: {
        success: {
            light: '#86efac',  // Soft green
            main: '#22c55e',   // Nature green
            dark: '#15803d',   // Deep forest
        },
        warning: {
            light: '#fbbf24',  // Soft amber
            main: '#f59e0b',   // Amber
            dark: '#d97706',   // Deep amber
        },
        error: {
            light: '#fca5a5',  // Soft red
            main: '#ef4444',   // Clear red
            dark: '#dc2626',   // Deep red
        },
        info: {
            light: '#bae6fd',  // Light sky (theme primary)
            main: '#0ea5e9',   // Corporate blue (theme primary)
            dark: '#0369a1',   // Rich navy (theme primary)
        }
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

// Theme registry
export const themes: Record<ThemeName, ThemeColors> = {
    warm: warmTheme,
    cool: coolTheme,
    pink: pinkTheme,
    green: greenTheme,
    blue: blueTheme,
}

// Get theme colors by name
export function getTheme(name: ThemeName): ThemeColors {
    return themes[name] || warmTheme // Default to warm theme
}

// CSS custom properties generator for themes
export function generateThemeCSS(themeName: ThemeName): string {
    const theme = getTheme(themeName)

    const lightModeVars: string[] = []
    const darkModeVars: string[] = []

    // Light mode: use normal primary colors
    Object.entries(theme.primary).forEach(([key, value]) => {
        lightModeVars.push(`--color-primary-${key}: ${value};`)
    })

    // Light mode: accent colors
    lightModeVars.push(`--color-accent-success-light: ${theme.accent.success.light};`)
    lightModeVars.push(`--color-accent-success-main: ${theme.accent.success.main};`)
    lightModeVars.push(`--color-accent-success-dark: ${theme.accent.success.dark};`)
    lightModeVars.push(`--color-accent-warning-light: ${theme.accent.warning.light};`)
    lightModeVars.push(`--color-accent-warning-main: ${theme.accent.warning.main};`)
    lightModeVars.push(`--color-accent-warning-dark: ${theme.accent.warning.dark};`)
    lightModeVars.push(`--color-accent-error-light: ${theme.accent.error.light};`)
    lightModeVars.push(`--color-accent-error-main: ${theme.accent.error.main};`)
    lightModeVars.push(`--color-accent-error-dark: ${theme.accent.error.dark};`)
    lightModeVars.push(`--color-accent-info-light: ${theme.accent.info.light};`)
    lightModeVars.push(`--color-accent-info-main: ${theme.accent.info.main};`)
    lightModeVars.push(`--color-accent-info-dark: ${theme.accent.info.dark};`)

    // Dark mode: thoughtful color mapping for proper contrast and hierarchy
    // Keep the main brand colors recognizable, but adjust for dark backgrounds
    const darkPrimaryMapping = {
        50: `color-mix(in srgb, ${theme.primary[950]} 85%, black 15%)`,   // Very dark but slightly tinted
        100: `color-mix(in srgb, ${theme.primary[900]} 70%, black 30%)`, // Dark tinted background
        200: `color-mix(in srgb, ${theme.primary[800]} 60%, black 40%)`, // Medium dark background
        300: `color-mix(in srgb, ${theme.primary[700]} 80%, white 20%)`, // Muted but visible
        400: `color-mix(in srgb, ${theme.primary[600]} 85%, white 15%)`, // More saturated
        500: theme.primary[500],  // Keep main brand color recognizable
        600: `color-mix(in srgb, ${theme.primary[400]} 90%, white 10%)`, // Lighter, more vibrant
        700: `color-mix(in srgb, ${theme.primary[300]} 85%, white 15%)`, // Bright for contrast
        800: `color-mix(in srgb, ${theme.primary[200]} 80%, white 20%)`, // Very bright text
        900: `color-mix(in srgb, ${theme.primary[100]} 75%, white 25%)`, // Brightest readable
        950: `color-mix(in srgb, ${theme.primary[50]} 70%, white 30%)`,   // Near white for contrast
    }

    Object.entries(darkPrimaryMapping).forEach(([key, value]) => {
        darkModeVars.push(`--color-primary-${key}: ${value};`)
    })

    // Dark mode: accent colors (keep semantic colors consistent in dark mode)
    darkModeVars.push(`--color-accent-success-light: ${theme.accent.success.light};`)
    darkModeVars.push(`--color-accent-success-main: ${theme.accent.success.main};`)
    darkModeVars.push(`--color-accent-success-dark: ${theme.accent.success.dark};`)
    darkModeVars.push(`--color-accent-warning-light: ${theme.accent.warning.light};`)
    darkModeVars.push(`--color-accent-warning-main: ${theme.accent.warning.main};`)
    darkModeVars.push(`--color-accent-warning-dark: ${theme.accent.warning.dark};`)
    darkModeVars.push(`--color-accent-error-light: ${theme.accent.error.light};`)
    darkModeVars.push(`--color-accent-error-main: ${theme.accent.error.main};`)
    darkModeVars.push(`--color-accent-error-dark: ${theme.accent.error.dark};`)
    darkModeVars.push(`--color-accent-info-light: ${theme.accent.info.light};`)
    darkModeVars.push(`--color-accent-info-main: ${theme.accent.info.main};`)
    darkModeVars.push(`--color-accent-info-dark: ${theme.accent.info.dark};`)

    // Light mode semantic colors
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

    // Dark mode semantic colors (carefully chosen for good contrast)
    darkModeVars.push(`--color-background-primary: color-mix(in srgb, ${theme.primary[950]} 90%, black 10%);`)
    darkModeVars.push(`--color-background-secondary: color-mix(in srgb, ${theme.primary[900]} 80%, black 20%);`)
    darkModeVars.push(`--color-background-tertiary: color-mix(in srgb, ${theme.primary[800]} 70%, black 30%);`)
    darkModeVars.push(`--color-surface-primary: color-mix(in srgb, ${theme.primary[950]} 85%, black 15%);`)
    darkModeVars.push(`--color-surface-secondary: color-mix(in srgb, ${theme.primary[900]} 75%, black 25%);`)
    darkModeVars.push(`--color-surface-elevated: color-mix(in srgb, ${theme.primary[800]} 80%, black 20%);`)
    darkModeVars.push(`--color-text-primary: color-mix(in srgb, white 95%, ${theme.primary[50]} 5%);`) // Near white with slight tint
    darkModeVars.push(`--color-text-secondary: color-mix(in srgb, white 85%, ${theme.primary[100]} 15%);`) // Bright but readable
    darkModeVars.push(`--color-text-tertiary: color-mix(in srgb, white 70%, ${theme.primary[200]} 30%);`) // Still quite bright
    darkModeVars.push(`--color-border-primary: color-mix(in srgb, ${theme.primary[700]} 70%, white 30%);`)
    darkModeVars.push(`--color-border-secondary: color-mix(in srgb, ${theme.primary[600]} 75%, white 25%);`)

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
