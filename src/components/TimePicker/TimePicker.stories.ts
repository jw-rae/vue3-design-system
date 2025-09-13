import TimePicker from './TimePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  argTypes: {
    modelValue: { control: { type: 'text' } },
    min: { control: { type: 'text' } },
    max: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    mode: {
      control: { type: 'select' },
      options: ['time', 'chronometer', 'timer'],
    },
    ampm: {
      control: { type: 'boolean' },
      description: 'Enable 12-hour mode with AM/PM',
    },
  },
};


const Template = (args: any) => ({
  components: { TimePicker },
  setup() {
    const value = ref(args.modelValue ?? '12:00');
    return { args, value };
  },
  template: `
    <TimePicker v-bind="args" v-model="value" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '12:00',
  min: '',
  max: '',
  label: 'Time',
  disabled: false,
  mode: 'time',
  ampm: false,
};

export const AMPM = Template.bind({});
AMPM.args = {
  ...Default.args,
  modelValue: '03:30',
  ampm: true,
  label: '12-hour (AM/PM)',
};

export const Chronometer = Template.bind({});
Chronometer.args = {
  ...Default.args,
  modelValue: '00:00:00',
  mode: 'chronometer',
  label: 'Chronometer',
};

export const Timer = Template.bind({});
Timer.args = {
  ...Default.args,
  modelValue: '00:10:00',
  mode: 'timer',
  label: 'Timer',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
