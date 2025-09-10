import type { Meta, StoryObj } from '@storybook/vue3'
import { AccentColorsDemo } from '../src/components/AccentColorsDemo'

const meta: Meta<typeof AccentColorsDemo> = {
    title: 'Design System/Accent Colors',
    component: AccentColorsDemo,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# Theme-Aware Accent Colors

This demo showcases how semantic accent colors (success, warning, error, info) adapt to each theme while maintaining their semantic meaning.

## Features

- **Theme-Aware**: Colors automatically adapt to the selected theme
- **Semantic Consistency**: Success is always "green-ish", error is always "red-ish", etc., but the exact colors match each theme's personality
- **Component Integration**: Alert, Button, and Badge components automatically use these accent colors
- **Dark Mode Support**: Accent colors work seamlessly in both light and dark modes

## Color Palettes

Each theme defines its own accent color palette:

- **System Warm**: Earthy greens for success, warm oranges for warning
- **System Cool**: Clean blues for info, consistent reds for error
- **Elegant Pink**: Purple accents for info, maintaining the theme's sophistication
- **Nature Green**: Uses the theme's greens for success, cyan for info
- **Corporate Blue**: Professional color choices that complement the blue theme

Switch between themes using the theme toggle to see how all components automatically adapt their accent colors.
        `,
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccentColorsDemo>

export const Default: Story = {
    render: () => ({
        components: { AccentColorsDemo },
        template: '<AccentColorsDemo />',
    }),
}

export const ThemeComparison: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the theme toggle above to see how accent colors adapt to different themes.',
            },
        },
    },
    render: () => ({
        components: { AccentColorsDemo },
        template: `
      <div>
        <div class="mb-4 p-4 bg-background-secondary rounded-lg border border-border-primary">
          <p class="text-sm text-text-secondary mb-2">
            💡 <strong>Try switching themes</strong> using the theme toggle in the top toolbar to see how accent colors adapt to each theme's personality.
          </p>
          <p class="text-xs text-text-tertiary">
            Notice how success colors remain "green-ish" but take on the character of each theme.
          </p>
        </div>
        <AccentColorsDemo />
      </div>
    `,
    }),
}
