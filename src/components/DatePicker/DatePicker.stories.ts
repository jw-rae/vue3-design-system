import type { Meta, StoryObj } from '@storybook/vue3';
import DatePicker from './DatePicker.vue';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A date picker component for selecting dates.',
      },
    },
  },
  argTypes: {
    modelValue: { control: { type: 'text' }, description: 'The current date value (YYYY-MM-DD)' },
    min: { control: { type: 'text' }, description: 'Minimum allowed date value' },
    max: { control: { type: 'text' }, description: 'Maximum allowed date value' },
    label: { control: { type: 'text' }, description: 'Label for the input field' },
    disabled: { control: { type: 'boolean' }, description: 'Whether the input is disabled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '2025-09-10',
    min: '',
    max: '',
    label: 'Date',
    disabled: false,
  },
  render: (args) => ({
    components: { DatePicker },
    setup() {
      return { args };
    },
    template: `
      <DatePicker v-bind="args" />
      <div style="margin-top: 1rem;">Value: {{ args.modelValue }}</div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: '2025-09-10',
    min: '',
    max: '',
    label: 'Date',
    disabled: true,
  },
  render: (args) => ({
    components: { DatePicker },
    setup() {
      return { args };
    },
    template: `
      <DatePicker v-bind="args" />
      <div style="margin-top: 1rem;">Value: {{ args.modelValue }}</div>
    `,
  }),
};
