import { ref } from 'vue';
import InlineTimerPicker from './InlineTimerPicker.vue';

export default {
    title: 'Components/InlineTimerPicker',
    component: InlineTimerPicker,
    argTypes: {
        modelValue: { control: { type: 'number' }, description: 'Timer value in seconds' },
        showSeconds: { control: { type: 'boolean' }, description: 'Show seconds field' },
        small: { control: { type: 'boolean' }, description: 'Compact style' },
        maxHours: { control: { type: 'number' }, description: 'Maximum hours selectable' },
        ampm: { control: { type: 'boolean' }, description: 'Enable 12-hour AM/PM mode' },
    },
};

const Template = (args, { updateArgs }) => ({
    components: { InlineTimerPicker },
    setup() {
        const value = ref(args.modelValue ?? 0);
        function onUpdate(val) {
            value.value = val;
            updateArgs && updateArgs({ modelValue: val });
        }
        return { args, value, onUpdate };
    },
    template: `
    <div style="padding: 2em; background: #f8f9fa;">
      <InlineTimerPicker v-bind="args" :model-value="value" @update:modelValue="onUpdate" />
      <div style="margin-top: 1em; font-size: 0.9em; color: #666;">
        Value: {{ value }} seconds
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: 0,
    showSeconds: true,
    small: false,
    maxHours: 23,
};

export const Small = Template.bind({});
Small.args = {
    modelValue: 0,
    showSeconds: true,
    small: true,
    maxHours: 23,
};

export const NoSeconds = Template.bind({});
NoSeconds.args = {
    modelValue: 0,
    showSeconds: false,
    small: false,
    maxHours: 23,
};

export const LongTimer = Template.bind({});
LongTimer.args = {
    modelValue: 3661,
    showSeconds: true,
    small: false,
    maxHours: 99,
};

export const AmPm12Hour = Template.bind({});
AmPm12Hour.args = {
    modelValue: 0,
    showSeconds: true,
    small: false,
    maxHours: 12,
    ampm: true,
};