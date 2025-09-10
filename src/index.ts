// Main export file for the design system
import type { App } from 'vue'

// Components
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Modal from './components/Modal/Modal.vue'
import Input from './components/Input/Input.vue'
import Badge from './components/Badge/Badge.vue'
import Alert from './components/Alert/Alert.vue'
import Select from './components/Select/Select.vue'
import Spinner from './components/Spinner/Spinner.vue'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.vue'
import { AccentColorsDemo, AccentColorCard } from './components/AccentColorsDemo'

// Composables
export { useTheme } from './composables/useTheme'

// Styles
import './assets/styles/main.css'

// Export individual components
export { Button, Card, Modal, Input, Badge, Alert, Select, Spinner, ThemeToggle, AccentColorsDemo, AccentColorCard }

// Export types
export type { ButtonProps } from './components/Button/Button.vue'
export type { CardProps } from './components/Card/Card.vue'
export type { ModalProps } from './components/Modal/Modal.vue'
export type { InputProps } from './components/Input/Input.vue'
export type { BadgeProps } from './components/Badge/Badge.vue'
export type { AlertProps } from './components/Alert/Alert.vue'
export type { SelectProps, SelectOption } from './components/Select/Select.vue'
export type { SpinnerProps } from './components/Spinner/Spinner.vue'

// Import and export design tokens from JS file
import tokensDefault from './theme/tokens.js'
export const tokens = tokensDefault

// Plugin installation function
export const DesignSystem = {
    install(app: App) {
        app.component('UiButton', Button)
        app.component('UiCard', Card)
        app.component('UiModal', Modal)
        app.component('UiInput', Input)
        app.component('UiBadge', Badge)
        app.component('UiAlert', Alert)
        app.component('UiSelect', Select)
        app.component('UiSpinner', Spinner)
        app.component('UiThemeToggle', ThemeToggle)
    },
}

// Default export
export default DesignSystem
