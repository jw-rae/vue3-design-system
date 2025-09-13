import DatePicker from './DatePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    modelValue: { control: { type: 'text' } },
    min: { control: { type: 'text' } },
    max: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
};

const Template = (args: any) => ({
  components: { DatePicker },
  setup() {
    const value = ref(args.modelValue ?? '2025-09-10');
    return { args, value };
  },
  template: `
    <DatePicker v-bind="args" v-model="value" />
    <div style="margin-top: 1rem;">Value: {{ value }}</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '2025-09-10',
  min: '',
  max: '',
  label: 'Date',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
