import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>('system')
const isDark = ref(false)

// Check system preference
const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Apply theme to document
const applyTheme = (currentTheme: Theme) => {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    if (currentTheme === 'system') {
        const systemTheme = getSystemTheme()
        isDark.value = systemTheme === 'dark'
        root.classList.toggle('dark', systemTheme === 'dark')
    } else {
        isDark.value = currentTheme === 'dark'
        root.classList.toggle('dark', currentTheme === 'dark')
    }
}

// Initialize theme from localStorage or system
const initializeTheme = () => {
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem('theme') as Theme
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
        theme.value = stored
    }

    applyTheme(theme.value)
}

// Watch for theme changes
watch(theme, (newTheme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme)
    }
    applyTheme(newTheme)
}, { immediate: true })

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
    return {
        theme,
        isDark,
        setTheme: (newTheme: Theme) => {
            theme.value = newTheme
        },
        toggleTheme: () => {
            theme.value = theme.value === 'light' ? 'dark' : 'light'
        },
        initializeTheme,
    }
}
