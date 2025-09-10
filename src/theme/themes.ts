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
        50: '#fdf2f8',   // Softest pink blush
        100: '#fce7f3',  // Light pink mist
        200: '#f8d5e3',  // Gentle pink
        300: '#f2b8ce',  // Soft rose
        400: '#e48aaa',  // Muted rose pink
        500: '#d16891',  // Main dusty rose
        600: '#b85078',  // Deep rose
        700: '#9d3f63',  // Rich berry
        800: '#7c2e4f',  // Dark berry
        900: '#5e1e3b',  // Deep wine
        950: '#3d1429',  // Darkest wine
    },
    accent: {
        success: {
            light: '#e8f0e8',  // Very muted sage with pink undertone
            main: '#7a9b7a',   // Desaturated sage-green
            dark: '#5a735a',   // Deep muted green-grey
        },
        warning: {
            light: '#f8e7d5',  // Muted cream-pink
            main: '#d4a679',   // Dusty rose-gold
            dark: '#a17854',   // Deep rose-brown
        },
        error: {
            light: '#f0e8e8',  // Very muted rose blush
            main: '#a67a7a',   // Desaturated rose-grey
            dark: '#7a5a5a',   // Deep muted red-grey
        },
        info: {
            light: '#f2e7f3',  // Soft lavender-pink
            main: '#b8829e',   // Muted mauve-pink
            dark: '#7c5268',   // Deep mauve-grey
        }
    },
    background: {
        primary: '#ffffff',
        secondary: '#fdf2f8',  // Softest pink blush
        tertiary: '#fce7f3',   // Light pink mist
        inverse: '#3d1429',    // Darkest wine
    },
    surface: {
        primary: '#ffffff',
        secondary: '#fdf2f8',
        elevated: '#ffffff',
        overlay: 'rgba(61, 20, 41, 0.6)', // Dark wine overlay
    },
    text: {
        primary: '#3d1429',    // Darkest wine
        secondary: '#5e1e3b',  // Deep wine
        tertiary: '#7c2e4f',   // Dark berry
        inverse: '#fdf2f8',    // Softest pink blush
        disabled: '#f2b8ce',   // Soft rose
    },
    border: {
        primary: '#f8d5e3',    // Gentle pink
        secondary: '#f2b8ce',  // Soft rose
        focus: '#d16891',      // Main dusty rose
        error: '#f87171',      // Muted coral red
    },
}

// 🌿 **Green Theme**: Soothing muted nature greens
export const greenTheme: ThemeColors = {
    primary: {
        50: '#f9faf9',   // Almost grey with hint of green
        100: '#f3f5f3',  // Very muted sage
        200: '#e6e9e6',  // Grey-green
        300: '#d1d6d1',  // Muted sage-grey
        400: '#a8b0a8',  // Grey with green undertone
        500: '#8a958a',  // Main muted green-grey
        600: '#6b766b',  // Deep muted sage
        700: '#4e574e',  // Dark grey-green
        800: '#3a423a',  // Very dark grey-green
        900: '#262c26',  // Deep grey-green
        950: '#151815',  // Darkest grey-green
    },
    accent: {
        success: {
            light: '#e8f0e8',  // Very muted sage-green
            main: '#7a8f7a',   // Desaturated sage green
            dark: '#5a6b5a',   // Deep muted green
        },
        warning: {
            light: '#f5f3e6',  // Muted cream with green undertone
            main: '#c4b370',   // Muted sage-gold
            dark: '#8a7a42',   // Deep olive-gold
        },
        error: {
            light: '#f2e8e8',  // Very muted rose-grey
            main: '#a67a7a',   // Desaturated rose-grey
            dark: '#7a5a5a',   // Deep muted red-grey
        },
        info: {
            light: '#e9f0f0',  // Muted blue-green
            main: '#7ba3a3',   // Sage-blue grey
            dark: '#4e6b6b',   // Deep blue-green grey
        }
    },
    background: {
        primary: '#ffffff',
        secondary: '#f9faf9',  // Almost grey with hint of green
        tertiary: '#f3f5f3',   // Very muted sage
        inverse: '#151815',    // Darkest grey-green
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f9faf9',
        elevated: '#ffffff',
        overlay: 'rgba(21, 24, 21, 0.6)', // Muted grey-green overlay
    },
    text: {
        primary: '#151815',    // Darkest grey-green
        secondary: '#262c26',  // Deep grey-green
        tertiary: '#3a423a',   // Dark grey-green
        inverse: '#f9faf9',    // Almost grey with hint of green
        disabled: '#d1d6d1',   // Muted sage-grey
    },
    border: {
        primary: '#e6e9e6',    // Grey-green
        secondary: '#d1d6d1',  // Muted sage-grey
        focus: '#8a958a',      // Main muted green-grey
        error: '#dc2626',      // Keep error red
    },
}

// 🌌 **Blue Theme**: Sophisticated night sky to ice blue
export const blueTheme: ThemeColors = {
    primary: {
        50: '#f8fafd',   // Ice white with blue whisper
        100: '#f1f6fb',  // Frost blue
        200: '#e2eef8',  // Pale ice blue
        300: '#c8ddf1',  // Soft steel blue
        400: '#9bc2e7',  // Muted slate blue
        500: '#6b9fd9',  // Sophisticated steel blue (main)
        600: '#4a7db8',  // Deep steel blue
        700: '#35619a',  // Rich midnight blue
        800: '#244a7c',  // Dark navy steel
        900: '#1a3660',  // Deep night blue
        950: '#0a1426',  // Deepest midnight navy
    },
    accent: {
        success: {
            light: '#e8f2f0',  // Muted mint with blue undertone
            main: '#7ba8a0',   // Steel-green
            dark: '#4e6b66',   // Deep blue-green
        },
        warning: {
            light: '#f2f0e8',  // Muted champagne with blue undertone
            main: '#b8a885',   // Steel-gold
            dark: '#7a7056',   // Deep blue-brown
        },
        error: {
            light: '#f0e8e8',  // Soft blush with blue undertone
            main: '#a87a7a',   // Steel-rose
            dark: '#6b4e4e',   // Deep blue-grey red
        },
        info: {
            light: '#e2eef8',  // Pale ice blue (theme primary)
            main: '#6b9fd9',   // Sophisticated steel blue (theme primary)
            dark: '#35619a',   // Rich midnight blue (theme primary)
        }
    },
    background: {
        primary: '#ffffff',
        secondary: '#f8fafd',  // Ice white with blue whisper
        tertiary: '#f1f6fb',   // Frost blue
        inverse: '#0a1426',    // Deepest midnight navy
    },
    surface: {
        primary: '#ffffff',
        secondary: '#f8fafd',
        elevated: '#ffffff',
        overlay: 'rgba(10, 20, 38, 0.6)', // Deepest midnight navy overlay
    },
    text: {
        primary: '#0a1426',    // Deepest midnight navy
        secondary: '#1a3660',  // Deep night blue
        tertiary: '#244a7c',   // Dark navy steel
        inverse: '#f8fafd',    // Ice white
        disabled: '#c8ddf1',   // Soft steel blue
    },
    border: {
        primary: '#e2eef8',    // Pale ice blue
        secondary: '#c8ddf1',  // Soft steel blue
        focus: '#6b9fd9',      // Sophisticated steel blue
        error: '#dc2626',      // Clean red
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
