import type { Meta, StoryObj } from '@storybook/vue3';
import TimePicker from './TimePicker.vue';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A time picker component for selecting times.',
      },
    },
  },
  argTypes: {
    modelValue: { control: { type: 'text' }, description: 'The current time value (HH:mm or HH:mm:ss)' },
    min: { control: { type: 'text' }, description: 'Minimum allowed time value' },
    max: { control: { type: 'text' }, description: 'Maximum allowed time value' },
    label: { control: { type: 'text' }, description: 'Label for the input field' },
    disabled: { control: { type: 'boolean' }, description: 'Whether the input is disabled' },
    mode: { control: { type: 'select' }, options: ['time', 'chronometer', 'timer'], description: 'Picker mode' },
    twelveHour: { control: { type: 'boolean' }, description: 'Enable 12-hour mode with AM/PM' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '12:00',
    min: '',
    max: '',
    label: 'Time',
    disabled: false,
    mode: 'time',
    twelveHour: false,
  },
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args };
    },
    template: `
      <TimePicker v-bind="args" />
    `,
  }),
};

export const AMPM: Story = {
  args: {
    modelValue: '03:30',
    min: '',
    max: '',
    label: '12-hour (AM/PM)',
    disabled: false,
    mode: 'time',
    twelveHour: true,
  },
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args };
    },
    template: `
      <TimePicker v-bind="args" />
    `,
  }),
};

export const Chronometer: Story = {
  args: {
    modelValue: '00:00:00',
    min: '',
    max: '',
    label: 'Chronometer',
    disabled: false,
    mode: 'chronometer',
    twelveHour: false,
  },
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args };
    },
    template: `
      <TimePicker v-bind="args" />
    `,
  }),
};

// Add Timer and Disabled stories in object format
export const Timer: Story = {
  args: {
    modelValue: '00:10',
    min: '',
    max: '',
    label: 'Timer',
    disabled: false,
    mode: 'timer',
    twelveHour: false,
  },
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args };
    },
    template: `
      <TimePicker v-bind="args" />
    `,
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: '12:00',
    min: '',
    max: '',
    label: 'Time',
    disabled: true,
    mode: 'time',
    twelveHour: false,
  },
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args };
    },
    template: `
      <TimePicker v-bind="args" />
    `,
  }),
};
