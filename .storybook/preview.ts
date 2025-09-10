import type { Preview } from '@storybook/vue3';
import '../src/assets/styles/main.css';
import { useTheme } from '../src/composables/useTheme';

// Initialize theme for Storybook
const { initializeTheme, setTheme } = useTheme();
initializeTheme();

// Watch for Storybook toolbar dark mode changes
if (typeof window !== 'undefined') {
    // Listen for Storybook dark mode changes
    window.addEventListener('message', (event) => {
        if (event.data?.source === '@storybook/addon-backgrounds' ||
            event.data?.type === 'STORYBOOK_ADDON_BACKGROUNDS_UPDATE') {
            // Force theme update when background changes
            setTimeout(() => {
                const isDarkBackground = document.body.style.backgroundColor === 'rgb(31, 41, 55)' ||
                    document.documentElement.classList.contains('dark');
                setTheme(isDarkBackground ? 'dark' : 'light');
            }, 100);
        }
    });

    // Also check for dark class changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isDark = document.documentElement.classList.contains('dark');
                setTheme(isDark ? 'dark' : 'light');
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            toc: true,
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#ffffff',
                },
                {
                    name: 'dark',
                    value: '#1f2937',
                },
                {
                    name: 'gray',
                    value: '#f9fafb',
                },
            ],
        },
    },
};

export default preview;
