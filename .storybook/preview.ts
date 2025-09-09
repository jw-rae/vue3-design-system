import type { Preview } from '@storybook/vue3';
import '../src/assets/styles/main.css';

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
