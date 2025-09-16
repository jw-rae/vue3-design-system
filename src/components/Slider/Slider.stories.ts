import type { Meta, StoryObj } from '@storybook/vue3';
import Slider from './Slider.vue';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple slider component for selecting a value within a range.',
      },
    },
  },
  argTypes: {
    modelValue: { control: { type: 'number' }, description: 'The current slider value' },
    min: { control: { type: 'number' }, description: 'Minimum allowed value' },
    max: { control: { type: 'number' }, description: 'Maximum allowed value' },
    step: { control: { type: 'number' }, description: 'Step size for the slider' },
    label: { control: { type: 'text' }, description: 'Label for the slider input' },
    disabled: { control: { type: 'boolean' }, description: 'Whether the slider is disabled' },
    showValue: { control: { type: 'boolean' }, description: 'Show the current value next to the slider' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    showValue: true,
    disabled: false,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <Slider v-bind="args" />
      <div style="margin-top: 1rem;">Value: {{ args.modelValue }}</div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    showValue: true,
    disabled: true,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <Slider v-bind="args" />
      <div style="margin-top: 1rem;">Value: {{ args.modelValue }}</div>
    `,
  }),
};
