import { ref, computed, watch } from 'vue'
import { type ThemeName, generateThemeCSS } from '../theme/themes'

export type Theme = 'light' | 'dark' | 'system'

// Theme state
const theme = ref<Theme>('system')
const isDark = ref(false)
const currentTheme = ref<ThemeName>('warm')

// Check system preference
const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Apply theme to document
const applyTheme = (currentThemeMode: Theme) => {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    // Apply dark/light mode
    if (currentThemeMode === 'system') {
        const systemTheme = getSystemTheme()
        isDark.value = systemTheme === 'dark'
        root.classList.toggle('dark', systemTheme === 'dark')
    } else {
        isDark.value = currentThemeMode === 'dark'
        root.classList.toggle('dark', currentThemeMode === 'dark')
    }

    // Apply color theme
    root.setAttribute('data-theme', currentTheme.value)

    // Inject theme CSS custom properties
    let themeStyleElement = document.getElementById('theme-styles')
    if (!themeStyleElement) {
        themeStyleElement = document.createElement('style')
        themeStyleElement.id = 'theme-styles'
        document.head.appendChild(themeStyleElement)
    }

    themeStyleElement.textContent = generateThemeCSS(currentTheme.value)
}

// Initialize theme from localStorage or system
const initializeTheme = () => {
    if (typeof window === 'undefined') return

    // Load theme mode (light/dark/system)
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        theme.value = storedTheme
    }

    // Load color theme
    const storedColorTheme = localStorage.getItem('theme-color') as ThemeName
    if (storedColorTheme && ['warm', 'cool', 'pink', 'green', 'blue'].includes(storedColorTheme)) {
        currentTheme.value = storedColorTheme
    }

    applyTheme(theme.value)
}

// Watch for theme changes
watch(theme, (newTheme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme)
    }
    applyTheme(newTheme)
})

// Watch for color theme changes
watch(currentTheme, (newColorTheme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme-color', newColorTheme)
    }
    applyTheme(theme.value)
})

// Listen for system theme changes
if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', () => {
        if (theme.value === 'system') {
            applyTheme('system')
        }
    })
}

export function useTheme() {
    const themeInfo = computed(() => ({
        mode: theme.value,
        isDark: isDark.value,
        colorTheme: currentTheme.value,
        displayName: {
            warm: 'System Warm',
            cool: 'System Cool',
            pink: 'Elegant Pink',
            green: 'Nature Green',
            blue: 'Corporate Blue'
        }[currentTheme.value]
    }))

    return {
        theme,
        isDark,
        currentTheme,
        themeInfo,
        setTheme: (newTheme: Theme) => {
            theme.value = newTheme
        },
        setColorTheme: (newColorTheme: ThemeName) => {
            currentTheme.value = newColorTheme
        },
        toggleTheme: () => {
            theme.value = theme.value === 'light' ? 'dark' : 'light'
        },
        initializeTheme,
    }
}
