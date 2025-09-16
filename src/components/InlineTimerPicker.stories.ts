import type { Meta, StoryObj } from '@storybook/vue3';
import InlineTimerPicker from './InlineTimerPicker.vue';

const meta: Meta<typeof InlineTimerPicker> = {
    title: 'Components/InlineTimerPicker',
    component: InlineTimerPicker,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'An inline timer picker component for selecting durations.',
            },
        },
    },
    argTypes: {
        modelValue: { control: { type: 'number' }, description: 'Timer value in seconds' },
        showSeconds: { control: { type: 'boolean' }, description: 'Show seconds field' },
        small: { control: { type: 'boolean' }, description: 'Compact style' },
        maxHours: { control: { type: 'number' }, description: 'Maximum hours selectable' },
        ampm: { control: { type: 'boolean' }, description: 'Enable 12-hour AM/PM mode' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        modelValue: 0,
        showSeconds: true,
        small: false,
        maxHours: 23,
    },
    render: (args, { updateArgs }) => ({
        components: { InlineTimerPicker },
        setup() {
            return { args };
        },
        template: `
            <div style="padding: 2em; background: #f8f9fa;">
                <InlineTimerPicker v-bind="args" />
                <div style="margin-top: 1em; font-size: 0.9em; color: #666;">
                    Value: {{ args.modelValue }} seconds
                </div>
            </div>
        `,
    }),
};

export const Small: Story = {
    args: {
        modelValue: 0,
        showSeconds: true,
        small: true,
        maxHours: 23,
    },
    render: (args) => ({
        components: { InlineTimerPicker },
        setup() {
            return { args };
        },
        template: `
            <InlineTimerPicker v-bind="args" />
        `,
    }),
};

export const NoSeconds: Story = {
    args: {
        modelValue: 0,
        showSeconds: false,
        small: false,
        maxHours: 23,
    },
    render: (args) => ({
        components: { InlineTimerPicker },
        setup() {
            return { args };
        },
        template: `
            <InlineTimerPicker v-bind="args" />
        `,
    }),
};

export const LongTimer: Story = {
    args: {
        modelValue: 3661,
        showSeconds: true,
        small: false,
        maxHours: 99,
    },
    render: (args) => ({
        components: { InlineTimerPicker },
        setup() {
            return { args };
        },
        template: `
            <InlineTimerPicker v-bind="args" />
        `,
    }),
};

export const AmPm12Hour: Story = {
    args: {
        modelValue: 0,
        showSeconds: true,
        small: false,
        maxHours: 12,
        ampm: true,
    },
    render: (args) => ({
        components: { InlineTimerPicker },
        setup() {
            return { args };
        },
        template: `
            <InlineTimerPicker v-bind="args" />
        `,
    }),
};