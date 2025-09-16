import Slider from './Slider.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    modelValue: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    showValue: { control: { type: 'boolean' } },
  },
};

const Template = (args: any) => ({
  components: { Slider },
  setup() {
    const value = ref(args.modelValue ?? 50);
    return { args, value };
  },
  template: `
    <Slider v-bind="args" v-model="value" />
    <div style="margin-top: 1rem;">Value: {{ value }}</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 50,
  min: 0,
  max: 100,
  step: 1,
  label: 'Volume',
  showValue: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
