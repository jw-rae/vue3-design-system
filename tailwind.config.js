/** @type {import('tailwindcss').Config} */
import { tokens } from './src/theme/tokens'

export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: tokens.colors,
            spacing: tokens.spacing,
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
            borderRadius: tokens.borderRadius,
            boxShadow: tokens.shadows,
        },
    },
    plugins: [],
}
